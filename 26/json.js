let jsonres = '{"fact":"Cats lap liquid from the underside of their tongue, not from the top.","length":69}'
let parsed = JSON.parse(jsonres);
let url = "https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    console.log(res);
    res.json().then((data)=>{
        console.log(data);
        //cg
    })
})