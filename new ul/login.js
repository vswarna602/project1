const sheets=SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1GBrHWa6v66GhsOYZXVhkbYWfbXoJJ2lRIX8_irFnM9M/edit#gid=0");
const sheet=sheets.getSheetByName("Sheet1");
function doPost(e){
  var data= e.parameter;
  sheet.appendRow([data.t1,data.t2,data.t3]);
  return ContentService.createTextOutput("SUCCESS");
}
function Login () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }

  

    // DOne
    alert('User Logged In!!') 
   window.location.href = "i.html"

  }
  




// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}