function validationForm(){
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('textarea').value.trim();

  document.getElementById("error-name").textContent = "";
  document.getElementById("error-email").textContent = "";
  document.getElementById("error-message").textContent = "";

  let isValid = true;

  if(name === ""){
    document.getElementById("error-name").textContent = "Name must be filled!";
    isValid = false;
  }

  if(email === ""){
    document.getElementById("error-email").textContent = "Email must be filled!";
    isValid = false;
  }

  if(message === ""){
    document.getElementById("error-message").textContent = "Message must be filled!";
    isValid = false;
  }

  if(isValid){
    alert("✅ Submit Successful!");
    
    document.myForm.reset();
  }
  
  return false; 
}
