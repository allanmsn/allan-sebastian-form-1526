let btn = document.getElementById('button');
let form = document.querySelector('form');
let fname = document.getElementById('full-name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateForm() {

   console.clear();

   let dataCollector = {};
   let errorCollector = [];

   fname.value = fname.value.trim();
   email.value = email.value.trim();
   message.value = message.value.trim();


   if (fname.value !== '') {
      dataCollector.fullName = fname.value;
   } else {
      errorCollector.push('Please enter your full name');
   }

   if (email.value !== '') {
      
      if (pattern.test(email.value)) {
         dataCollector.userEmail = email.value;
      } else {
         errorCollector.push('Please enter a valid email')
      }

   } else {
      errorCollector.push('Please enter your email');
   }

   if (message.value !== '') {
      dataCollector.userMessage = message.value;
   } else {
      errorCollector.push('Please enter your message');
   }

   if (errorCollector.length === 0) {
      console.log(dataCollector);
      form.reset();
   } else {
      console.log(errorCollector);
   }
}

btn.addEventListener('click', validateForm);
