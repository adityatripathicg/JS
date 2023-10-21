let jsonres = '{"fact":"Cats lap liquid from the underside of their tongue, not from the top.","length":69}'
let parsed = JSON.parse(jsonres);
let url = "https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})


//fetch with async and await
async function getfacts(){
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
}
getfacts();

//axios library
async function gf(){
    let res = await axios.get(url);
    console.log(res.data.fact);
}
gf();
