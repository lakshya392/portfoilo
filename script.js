// typing effect
const text = ["Frontend Developer", "Web Designer"];
let i=0, j=0, current="", del=false;

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

        setTimeout(type, del?100:200);
    }else{i=0;type();}
}
type();


// EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

document.getElementById("contact-form")
.addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
    .then(()=>alert("Message Sent ✅"))
    .catch(()=>alert("Error ❌"));
});
