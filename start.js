window.addEventListener('load',()=>{
    loader=document.querySelector('.loader');
    console.log(loader);
    loader.classList+=" hidden";
})

let timebtn=document.querySelector('footer div');

setInterval(() => {
date=new Date();

    let value=date.toLocaleString('en-US', {
        weekday: 'long', // long, short, narrow
        day: 'numeric', // numeric, 2-digit
        year: 'numeric', // numeric, 2-digit
        month: 'short', // numeric, 2-digit, long, short, narrow
        hour: 'numeric', // numeric, 2-digit
        minute: 'numeric', // numeric, 2-digit
        second: 'numeric', // numeric, 2-digit
    });

    timebtn.innerHTML=value;

}, 1000);
// ------------------------------------------------------------------------------------time

let meme=document.querySelector('.meme img');  

let array=[{url:"/images/bored11.gif"},
{url:"/images/bored2.gif"},
{url:"/images/bored3.gif"},
{url:"/images/bored4.gif"},
{url:"/images/bored5.gif"},
{url:"/images/bored6.gif"},
{url:"/images/bored7.gif"}
];
let index=0;

setInterval(()=>{
    meme.src=array[index].url;
    index=(index+1)%array.length;
}, 2000);
//----------------------------------------------------------------------------------changing gifs

let btnn=document.querySelector('.random button');

function convert() {
    let api=`https://www.boredapi.com/api/activity/`;
    let suggestion=document.querySelector('.random h2');
let one=document.querySelector('#act');
let two=document.querySelector('#act2');

    let k=true;
   
    if(k==true)
    {
        fetch(api)
 
        .then((response) =>{
            return response.json();
        })
       
        .then(data=>{
            suggestion.innerHTML=data.activity;
            one.innerHTML=data.type;
            two.innerHTML=data.participants
        })
    }  
}

convert();

btnn.addEventListener("click",()=>{
    convert();
});
//-----------------------------------------------------------------------------------random idea call


function convert2(text) {
    let api=`https://www.boredapi.com/api/activity?type=${text}`;
let suggestion=document.querySelector('.type h2');
let one=document.querySelector('#act3');
let two=document.querySelector('#act4');

let k=true;

if(k==true)
{
    fetch(api)

    .then((response) =>{
        return response.json();
    })
   
    .then(data=>{
        // console.log(data);

        suggestion.innerHTML=data.activity;
        one.innerHTML=data.type;
        two.innerHTML=data.participants
    })
}
}
 
convert2("education");
let me=document.querySelector('.type h3');
let global="education";

me.addEventListener('input',()=>{
    
    var type = document.forms[0];
    var txt = "";
    var i;
    for (i = 0; i < type.length; i++) {
      if (type[i].checked) {
        txt = txt + type[i].value + " ";
        break;
      }
    }
   global=txt;
    convert2(txt);
    
})

let btnx=document.querySelector('.type button');

btnx.addEventListener('click',()=>{
    convert2(global);
})
//-----------------------------------------------------------------------------------type of activity idea

function convert3(text) {
    let api=`https://www.boredapi.com/api/activity?participants=${text}`;
let suggestion=document.querySelector('.part h2');
let one=document.querySelector('#act5');
let two=document.querySelector('#act6');

let k=true;

if(k==true)
{
    fetch(api)

    .then((response) =>{
        return response.json();
    })
   
    .then(data=>{
        // console.log(data);

        suggestion.innerHTML=data.activity;
        one.innerHTML=data.type;
        two.innerHTML=data.participants
    })
}
}
 
convert3(1);
let done=document.querySelector('.part input');
let globalmain=1;

done.addEventListener('input',()=>{

            let txt=done.value;
            globalmain=txt;
             convert3(txt);
    })

let shh=document.querySelector('.part button');

shh.addEventListener('click',()=>{
    convert3(globalmain);
})
//----------------------------------------------------------------------------------no of participants call




