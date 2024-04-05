

var body = document.querySelector("body");
var myLink = document.querySelectorAll("navUl > a")[1];
// var copyBtn = document.querySelector(".copyBtn");
var copyBtn2 = document.querySelector(".copyBtn2");
var ham = document.querySelector(".ham")

var hamCnt = 0;

body.onload = function(){
  
    calValue();
    document.querySelector(".addInp").value = '';
    loadCoins();
    //new indexRoute();
}

ham.onclick= ()=>{
    showHam();
}

function showHam(){
    const links= document.querySelectorAll(".navBar > div:nth-child(2) > a")
    if(hamCnt == 0){
        links.forEach(link =>{
            link.style.display = "block";
        })
        ham.innerHTML = "X";
        hamCnt++;
     
    }
    else{
        links.forEach(link =>{
            link.style.display = "none";
        })
        ham.innerHTML = "&#9776;";   
        hamCnt = 0;
    }
}
 

// try{
//     var copyBtn = document.querySelector(".copyBtn");

//     copyBtn.onclick = function () {
//         copyAddress();
//     }

//     function copyAddress() {
//         var copyText = document.querySelector(".the_address2");
//         copyText.select();
//         copyText.setSelectionRange(0, 99999)
//         document.execCommand("copy");
//         document.querySelector(".copyBtn").innerHTML = "Copied!";
//         setTimeout(() => {
//             document.querySelector(".copyBtn").innerHTML = "Copy Address"

//         }, 1000);

//     }

// }
// catch(err){

// }


// copyBtn.onclick = function(){
//     copyAddress();
// }
copyBtn2.onclick = function(){
    copyAddress2();
}


let totalDay = null;
let today = new Date();
let day = 1;
let endDay = new Date(today.getFullYear(),12,31);
let hr = 23 - Number(today.getHours());
if(hr < 3){
    hr = 3;
}
let min = 59 - Number(today.getMinutes());
if(min < 0){
    min = 59
}
let sec = 50 - Number(today. getSeconds());
if(sec < 0){
    sec = 59
}
//let sec = 59;
//let min = 20;
//let hr = 10;
let divider = 1000*60*60*24;
totalDay = Math.floor((endDay.getTime()-today.getTime())/divider);
if(totalDay > 300){
    day = totalDay - 165;
}
else if(totalDay > 200){
    day = totalDay - 100;
}
else if(totalDay < 20){
    day = totalDay + 50;
}


const counter = () =>{
    //console.log("hello")
    if(sec > 0){
        sec--;

    }
    else{
        
        if(min > 0){
            min--
        }
        else{
            
            if(hr > 0){
                hr--;
            }
            else{
               
                if(day > 0){
                    day--;
                    if(sec == 0 && min == 0 && hr && day == 0){
                        clearTimeout(startTimer)
                    }
                }
                hr = 24; 
            }
            min = 59;
        }
        sec = 59;
    }
   
    document.querySelector('.countDiv > div:nth-child(1)').innerHTML = (day > 9)?day:`0${day}`;
    document.querySelector('.countDiv > div:nth-child(2)').innerHTML = (hr > 9)?hr:`0${hr}`;
    document.querySelector('.countDiv > div:nth-child(3)').innerHTML = (min > 9)?min:`0${min}`;
    document.querySelector('.countDiv > div:nth-child(4)').innerHTML = (sec > 9)?sec:`0${sec}`;
}

const startTimer = setInterval(counter,999);

let amountInp = document.querySelector(".amountInp");
amountInp.oninput = () =>{
    calValue()
}
amountInp.onchange = () =>{
    changeValue();
}

const calValue = () =>{
    let amount= document.querySelector(".amountInp").value;
    if(!isNaN(amount)){
        // alert(amount);
        // if(Number(amount) > 3000){
        //     amount = 3000;
        // }
        // amountInp.value = amount;
    }
    else{

        amount = amount.slice(0,-1);
        // if(Number(amount) > 3000){
        //     amount = 3000;
        // }
        amountInp.value = amount;
    }

    document.querySelector(".bonusInp").value = (amount*3).toFixed(2);
}

const changeValue = ()=>{
    let amount = document.querySelector(".amountInp")
    //alert(amount.value,'hello')
    if(Number(amount.value) > 1000000){
        amount.value = 1000000;
    }
    else if(Number(amount.value) < 0){
        amount.value = 0;
    }
    document.querySelector(".bonusInp").value = ((Number(amount.value)*3).toFixed(2));
}

let addInp = document.querySelector(".addInp")
addInp.onchange = () =>{
    addre = addInp.value;

    if( typeof addre == 'undefined' || addre == ''){
        document.querySelector(".addSpan").style.top = '20px';
    }
    else{
        document.querySelector(".addSpan").style.top = '-10px';
  
    }
   
   
}


 
function copyAddress() {
    let copyText = document.getElementById("copyInp");
   // copyText.focus();
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    //alert("address copied successufully");
    let btn = document.querySelector(".copyBtn")
    btn.style.backgroundColor = '#894fe7';
    btn.style.color = '#fff';
    btn.innerHTML = "ADDRESS COPIED"
    setTimeout(showCopy,2000);
}



function showCopy(){
    let btn = document.querySelector(".copyBtn")
    btn.innerHTML = "COPY ADDRESS";
    btn.style.backgroundColor = 'transparent';
}
function copyAddress2() {
    let copyText = document.getElementById("copyInp");
   // copyText.focus();
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    //alert("address copied successufully");
    let btn = document.querySelector(".copyBtn2")
    btn.style.backgroundColor = '#894fe7';
    btn.style.color = '#fff';
    btn.innerHTML = "ADDRESS COPIED"
    setTimeout(showCopy2,2000);
}


function showCopy2(){
    let btn = document.querySelector(".copyBtn2")
    btn.innerHTML = "COPY ADDRESS";
    btn.style.backgroundColor = 'transparent';
}

const scrollElements = document.querySelectorAll(".ani")
scrollElements.forEach((el) => {
    el.style.opacity = 0
  })

let modCnt = 0;
function showModal(){
    let mod =document.querySelector("#modal");
    let modCon = document.querySelector('#modal > div:nth-child(2)')
    if(modCnt == 0){
        modCnt++;
        mod.style.display = "flex";
        modCon.style.display = "block";
        mod.zIndex = "10000";
    }
   else{
        modCnt=0;
        mod.style.display = "none";
        modCon.style.display = "none";
        mod.zIndex = "1";
    }
    let send = Number(document.querySelector(".amountInp").value);
    let bonus = 3*send;
    document.querySelector(".rSpan").innerHTML = bonus.toFixed(2);
    document.querySelector(".sSpan").innerHTML = send;

}




/**Load on scroll */

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
  };

const displayScrollElement = (element) => {
    let name = element.className;
    let ind = name.split("-")[2]
    if(ind.search('scrolled') == -1){

    }
    else{
        ind = ind.split(" ")[0];
    }
    //alert(ind)
    //console.log(ind)
    element.style.opacity = 1
    element.classList.add(`scrolled-${ind}`);
  };

const hideScrollElement = (element) => {
    //element.classList.remove("scrolled");
    let name = element.className;
    let ind = name.split("-")[2]
    if(ind.search('scrolled') == -1){

    }
    else{
        ind = ind.split(" ")[0];
    }
    //alert(ind)
    //console.log(ind)
    element.classList.remove(`scrolled-${ind}`);
    element.style.opacity = 0;
  };

// const handleScrollAnimation = () => {
//     scrollElements.forEach((el) => {
//       if (elementInView(el, 100)) {
//         displayScrollElement(el);
//       } else {
//         hideScrollElement(el);
//       }
//     })
//   }


const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);

      }
    })
  }

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })

const loadCoins = () =>{
  
    let xhhtp = new XMLHttpRequest();
    xhhtp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            // console.log(JSON.parse(xhhtp.responseText)); 
            let dataRes = JSON.parse(xhhtp.responseText);
            let newData = dataRes;
            let content = ''
            newData.forEach((coin,index) =>{
                content+= `<li><img src="${coin.image}" width="20" height="auto">&nbsp;${coin.name}(${coin.symbol.toUpperCase()})&nbsp;&nbsp;&nbsp;&nbsp;${coin.current_price.toFixed(2)} </li>`
            })
            document.querySelector(".coinList").innerHTML = content;
            document.querySelector('.coinList').classList.add('marqueee')
         
            
        }
    }
    xhhtp.open("get", 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false', true); 
    xhhtp.setRequestHeader("Content-type", "application/json"); 
    // xhhtp.setRequestHeader('x-rapidapi-host', 'coinranking1.p.rapidapi.com'),
    // xhhtp.setRequestHeader('x-rapidapi-key', 'a98a16c9f0msh0428fb47c0b816ep1bfd80jsn550bf3013139')
    xhhtp.send();
}

const getRnd = (arg)=>{
    let price = Number(arg.replace(/, /g,''));
    if(price > 1000){
        return (`$ ${(price/1000).toFixed(1)}K`)
    }
    else if(price > 1 && price < 1000){
        return (`$${price.toFixed(1)}`);
    }
    else if(price > 0.09){
        return(`$ ${price.toFixed(2)}`)
    }
    else if(price > 0.0001 && price < 0.09) {
        return(`$ ${price.toFixed(3)}`)
    }
    else{
        return(`$ ${price.toFixed(6)}`)
    }
}


