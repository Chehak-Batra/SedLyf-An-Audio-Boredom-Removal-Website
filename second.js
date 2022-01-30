function responsive(x){
    if(x.matches){
        
        setInterval(() => {
            if(main.style.display!="none")
             {
                speechSynthesis.cancel();
                speakfunc("Press Spacebar to enable sightless mode(works on desktop screen)");
                console.log("working");
             }
        }, 12500);
    }

    else{
        setInterval(() => {
            if(main.style.display!="none")
             {
                speechSynthesis.cancel();
                speakfunc("Press Spacebar to enable sightless mode");
                console.log("working");
             }
        }, 12500);
    }
}
var x=window.matchMedia("(max-width: 1510px");
responsive(x);
x.addEventListener('change',responsive);

let api=`https://poetrydb.org/poemcount/500`;
// let api=`http://api.icndb.com/jokes/random`;
let poemsarr;
let speed=1;
const utterance=new SpeechSynthesisUtterance();
let inx=0;
let stoppp=true;
let repeat=false;

let k=true;

if(k==true)
{
    fetch(api)

    .then((response) =>{
        return response.json();
    })
   
    .then(data=>{
     
     console.log(data);
     poemsarr=data;

    })
}  

let flag=true;
let title=document.querySelector('#title');
let lyrics=document.querySelector('.lyrics');

function playpoem(text) {

    repeat=true;
    lyrics.innerHTML="";
    let wholetext=` The title of the poem is ${poemsarr[inx].title} The poem starts now `;
    // ${text}
    title.innerText=`${poemsarr[inx].title}`;

    poemsarr[inx].lines.forEach((element,index) => {
        if(index<27)
        {
            let line=document.createElement('p');
            line.innerHTML=`<p>${element}</p>`;
            lyrics.appendChild(line);
        }
        // console.log(`${element}`);
        wholetext+=`${element}`;
       
    });

    console.log(wholetext);

    speakfunc(wholetext);
}

utterance.addEventListener('end',()=>{

    if((inx>0 && stoppp) || (inx==0 && repeat)){
        
        if(flag)
        {
            // speed=1;
            speakfunc("The poem has ended. Hope you liked it. You can move your mouse and take a break or press escape key to disable sightless mode. Else the new poem begins ahead");
            flag=false;
            setTimeout(() => {
                
            }, 50000);
        }
        else{
            // speed=0.5;
            flag=true;
            if(inx==499)
             {
                 inx=0;
                //  repeat=true;
             }
             else if(inx==0)
             {
                 inx++;
                //  repeat=false;
             }    
            else 
            inx++;

            playpoem("");
            
        }
    }

    
})

function speakfunc(text)
{
    if(speechSynthesis.paused && speechSynthesis.speaking)            //paused and more text is left to speak
      {
        return speechSynthesis.resume();
      }

    if(speechSynthesis.speaking)  
      return;

    utterance.text=text;
    utterance.rate=speed;
    speechSynthesis.speak(utterance);
}

function pausefunc()
{
   if(speechSynthesis.speaking)                     //cursor in between text or unspoken text is present
    speechSynthesis.pause();
}

function stoptext() {

        speechSynthesis.cancel();
} 

let aside=document.querySelector('aside');
let main=document.querySelector('.main');
let nav_div=document.querySelector('nav div');
let sight=document.querySelector('.sight');

window.addEventListener('keydown',e=>{
    if(e.code=="Space" && main.style.display!='none'){
        speechSynthesis.cancel();
        blind();
    }

    else if(e.code=="Escape"){
        aside.style.display="flex";
        main.style.display="inherit";
        sight.style.display="none";
        nav_div.innerHTML=`<img id="blind" src="/images/walking-stick.png" width="5" height="5"> &nbsp; Press Spacebar to enable Sightless Mode`;
        stoppp=false;
        lyrics.innerHTML="";
        title.innerText="";
        stoptext();
    } 

    else if(e.code=="Space")
    {
        stoppp=true;

        if(speechSynthesis.paused || speechSynthesis.speaking)
        speakfunc(utterance.text);

        else{
            inx=0;
            // speed=0.5;
            playpoem("");
            inx=1;
        }
    }
//  console.log(e);

 else if(e.code=="ArrowLeft")
 {
    console.log("left click");

     if(inx==0)
      inx=499;
     else 
     inx--;

     speechSynthesis.cancel();
     playpoem("");
 }
 
 else if(e.code=="ArrowRight")
 {
     console.log("right click");

    if(inx==499)
      inx=0;
     else inx++;
     
     speechSynthesis.cancel();
     playpoem("");
 }
    // else if(e.code=="Enter")
    // {
    //     speechSynthesis.cancel();
    //     console.log("Enter is clicked");
    //     console.log(poemsarr[inx].title);
    //     speakfunc(poemsarr[inx].title);
    // }

})

function blind() {
    
    console.log(nav_div.innerHTML);
    aside.style.display="none";
    main.style.display="none";
    sight.style.display="flex"
    nav_div.innerHTML=`<img id="blind" src="/images/walking-stick.png" width="5" height="5"> &nbsp; Press Esc key to disable Sightless Mode`;
    
    repeat=false;
    speakfunc("hello everyone. Welcome to the audio version of sad life. This website is a one step solution to eliminate boredom and do something fun with us. Some instructions are made for you to enjoy the process. First is Press Spacebar to play poems or to resume playing poems if paused. Second is move your mouse to pause audio. Third is you can Press Right arrow key to play next poem or Left arrow key to play previous poem if you dont like the current poem. Last is you can Press escape button to exit");

}

window.addEventListener('mousemove',()=>{
    pausefunc();
})
// window.addEventListener('mousedown',(e)=>{

//     if(main.style.display=="none")
//     {
//         if(e.button==0 && inx!=0)
//         {
//             if(inx==0)
//              inx=499;
//             else 
//             inx--;

//             playpoem("");
//         }
        
//         if(e.button==2)
//         {
//            if(inx==499)
//              inx=0;
//             else inx++;
            
//             playpoem("");
//         }
         
//     }
// })

