function compareInput(){
    let pass1 = document.getElementById('pass').value;
    let pass2 = document.getElementById('rePass').value;
    if(pass1 !== pass2){
        document.getElementById("passwordMatch").innerHTML = "The above passwords must match";
        document.getElementById("signupbut").disabled = true;
    }
    else{
        document.getElementById("passwordMatch").innerHTML = "";
        document.getElementById("signupbut").disabled = false;
    }
  }