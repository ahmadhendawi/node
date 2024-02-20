const express= require('express')
var app=express();


app.get('/',function(req,res){
res.send("start server")
})


function factorial1(){
    let fact = 1;
    for (i = 1; i <= 10; i++) {
        fact= num*i;
        
    }
    return fact
}
function multiply(){
    for(let i = 1; i <= 10; i++) {
        const result = i * num;
    
    }
    return result
}
function fib(){
    console.log("")
}
app.get('/fact/:num',function(req,res){
    console.log(req.params.num)
    var factorial=factorial1(req.params.num)
    res.json("the factorial of this number is" + factorial)
})

    app.get('/multiply/:num',function(req,res){
    var multiply=multiply1(req.params.num)
    res.json("the multiplication table of this number is" + multiply )})
    
    app.get('/fib/:num',function(req,res){
        var fib=fib1(req.params.num)
        res.json("the factorial of this number is" + fib)})

        var server= app.listen(9000, function(){
    var host = server.address().address
    var port = server.address().port
})