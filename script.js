




let Days_in_a_week=["SUN","MON","TUE","WED","THU","FRI","SAT"]
let Months_in_a_year=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEPT","OCT","NOV","DEC"]


let sec=document.getElementsByClassName("sec")[0]
let min=document.getElementsByClassName("min")[0]
let hrs=document.getElementsByClassName("hrs")[0]
let day=document.getElementsByClassName("day")[0]
let date_of_the_month=document.getElementsByClassName("date_of_month")[0]
var a=new Date()
console.log(a)

let me=0

function add_zero(num_value){
if(num_value<=9 ){
return "0";
}
else{
    return 0;
}
}

function to_12(value) {
    if(value>12){
        return value-12;
    }
    else{
        return value;
    }
}


function change_date(){
   a=new Date()
    sec.innerHTML=add_zero(a.getSeconds())+a.getSeconds()
    min.innerHTML=add_zero(a.getMinutes())+a.getMinutes()+ " :"
    hrs.innerHTML=`${to_12(a.getHours()) + " :"}`
    day.innerHTML=Days_in_a_week[a.getDay()]
    date_of_the_month.innerHTML=a.getDate() +" "+ Months_in_a_year[a.getMonth()]+" "+a.getFullYear()
    
    // console.log(a.getFullYear())
}
let Date_1=setInterval(change_date,1000)
console.log(a)

//For TIMER

var Set_hrs=document.getElementsByClassName("set_hrs")[0].value
var Set_min=document.getElementsByClassName("set_min")[0].value
var Set_sec=document.getElementsByClassName("set_sec")[0].value
var hrs_counter=0
var min_counter=0
var sec_counter=0
var y=0
// function set_timer(){
//     Set_min = document.getElementsByClassName("set_min")[0].value
//     Set_hrs=document.getElementsByClassName("set_hrs")[0].value
//     Set_sec=document.getElementsByClassName("set_sec")[0].value 
//     hrs_counter=Set_hrs
//     min_counter=Set_min
//     sec_counter=Set_sec
//     y.minus_1(sec_counter,min_counter,hrs_counter)
    
// }
 
let x=0
y=0
z=0
h=0
counter=100
let hrs_show=document.getElementsByClassName("hrs_show")[0]
let min_show=document.getElementsByClassName("min_show")[0]
let sec_show=document.getElementsByClassName("sec_show")[0]

let start=document.getElementsByClassName("start")[0]
console.log(start)
let change=document.getElementsByClassName("change")[0]
console.log(change)
start.addEventListener('click',function go(){
    Set_min = document.getElementsByClassName("set_min")[0].value
    Set_hrs=document.getElementsByClassName("set_hrs")[0].value
    Set_sec=document.getElementsByClassName("set_sec")[0].value 
    h=Set_hrs
    z=Set_min
    x=Set_sec
    console.log(typeof(h))
    console.log(typeof(Set_hrs))


    change=document.getElementsByClassName("change")[0]
    let my_interval=setInterval(minus_1,1000)

    
})


change.classList.add("after")
console.log(change)
function minus_1(){
    sec_show.innerHTML=x 
    min_show.innerHTML=z +":"
    hrs_show.innerHTML=h +":"
    change.classList.remove("before")

    if(x!=0){
    x-=1
    min_show.innerHTML=add_zero(z)+z +":"
    hrs_show.innerHTML=add_zero(h)+h +":"
    //  console.log(x)
    sec_show.innerHTML=add_zero(x)+x
    }
    else{

      if(z!=0){ 
        z-=1
        x=59
        // console.log(z)
        // min_show.innerHTML=z +":"
        min_show.innerHTML=add_zero(z)+z +":"
        hrs_show.innerHTML=add_zero(h)+h +":"
        sec_show.innerHTML=add_zero(x)+x
    }
    
    else{
       if(h!=0){
        h-=1
        z=59
        // console.log(h)
        // hrs_show.innerHTML=h +":"
        min_show.innerHTML=add_zero(z)+z +":"
        hrs_show.innerHTML=add_zero(h)+h +":"
        sec_show.innerHTML=add_zero(x)+x
       }
       else{
        sec_show.innerHTML=x
        min_show.innerHTML=z +":"
        hrs_show.innerHTML=h +":"
        counter=0
       }
    }

} 
}


console.log("0"+"0")