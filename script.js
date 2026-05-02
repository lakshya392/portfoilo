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


(function(){
  emailjs.init("62KuctRvN9v5M3DxM"); // yaha apni public key daal
})();

document.getElementById("contact-form")
.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_iql7qas", 
    "template_rt16qr6", 
    this
  )
  .then(function() {
    alert("Message Sent Successfully 😎");
  }, function(error) {
    alert("Failed 😢 " + JSON.stringify(error));
  });
});
