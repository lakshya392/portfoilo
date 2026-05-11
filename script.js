document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("contact-form")
  .addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_iql7qas", 
      "template_main", 
      this
    )
    .then(() => {
      return emailjs.sendForm(
        "service_iql7qas",
        "template_reply",
        this
      );
    })
    .then(() => {
      alert("Message Sent Successfully 😎");
    })
    .catch((error) => {
      alert("Failed 😢 " + JSON.stringify(error));
    });

  });

});
