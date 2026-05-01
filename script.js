// typing
const text=["Frontend Developer","Web Designer","Learner 🚀"];
let i=0,j=0,current="",del=false;

function type(){
    let el=document.getElementById("typing");

    if(i<text.length){
        if(!del && j<=text[i].length){
            current=text[i].substring(0,j++);
        }else if(del && j>=0){
            current=text[i].substring(0,j--);
        }

        el.innerHTML=current;

        if(j===text[i].length) del=true;
        if(j===0){del=false;i++;}

        setTimeout(type,del?100:200);
    }else{i=0;type();}
}
type();

// scroll
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// reveal
const sections=document.querySelectorAll(".hidden");

window.addEventListener("scroll",()=>{
    sections.forEach(sec=>{
        let top=sec.getBoundingClientRect().top;
        if(top<window.innerHeight-100){
            sec.classList.add("show");
        }
    });
});

// form
function sendMessage(e){
    e.preventDefault();
    document.getElementById("msg").innerText="Message Sent ✅";
}