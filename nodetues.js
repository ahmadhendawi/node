const express= require('express')
var app=express();
const {get}= require('http')


app.get('/',function(req,res){
res.send("start server")
})

app.get('/fact/:num',function(req,res){
    var factorial=factorial1(req.params.num)
    res.json("the factorial of this number is " + factorial)
})

    app.get('/multiply/:num',function(req,res){
    var multiply=multiplication((req.params.num))
    res.json("the multiplication table of this number is " + multiply)})
    
    app.get('/fib/:num',function(req,res){
        var fib=fibonacci(req.params.num)
        res.json("the fibonacci sequence of this number is " + fibo)})

    app.get('/comm/:num',function(req,res) {
        var comm =commulative(req.params.num)
        res.json("the commulative of this number is " + comm)})
        
    app.get('/word/:string',function(req,res) {
 
            const word =req.params.string
            const result =stringa(word)
            res.json( result)})
        
    var server= app.listen(9000, function(){
    var host = server.address().address
    var port = server.address().port
})
function factorial1(num){
    let fact = 1;
    for (let i = 1; i <= num ; i++) {
        fact= fact*i;
        
    }
    return fact
}
function multiplication(x){
    let f=x
    let z=[]
    for(let i = 1; i <= 10; i++) {
        z.push(f*i)
    }
    return z
}
function fibonacci(z){
    let x=0
    const seq=[1,1]
    for (let i=2 ; i<=z ; i++){
    a=(i-1)+(i-2)}
}
function commulative(z){
    let x=0
    for( let i=0;i<=z;i++)
    {
    x=x+i}
    return x
}
function stringa(word){

    const len =word.length
    for(let i=0;i<len;i++)
    {
    if (word[i] !== word[len-1-i]){
    return false
        }}
    return true
}