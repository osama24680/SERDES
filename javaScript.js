let fieldName = document.querySelector(".fieldName");
let fieldEmail = document.querySelector(".fieldEmail");
let fieldPhone = document.querySelector(".fieldPhone");
let fieldMessage = document.querySelector(".fieldMessage");
let fieldButton = document.querySelector(".fieldButton");

let service_id = "service_d6o5ogd";
let template_id = "template_mgirepw";
let publickey = "bspO51pH8GUc-Sz6o";

emailjs.init(publickey);

function sendEmail(formData) {
  emailjs.send(service_id, template_id, formData).then(
    function (response) {
      console.log("Email sent successfully", response);
      alert("Email sent successfully");
      alert("We will contact you ASAP");
      fieldName.value = "";
      fieldEmail.value = "";
      fieldPhone.value = "";
      fieldMessage.value = ""
    },
    function (error) {
      console.error("Email failed to send", error);
      alert("Email failed to send");
    }
  );
}

fieldButton.addEventListener("click", function (e) {
  e.preventDefault();

  let formData = {
    form_name: fieldName.value,
    form_email: fieldEmail.value,
    form_phone: fieldPhone.value,
    form_message: fieldMessage.value,
  };
  sendEmail(formData);
});
