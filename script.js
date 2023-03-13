
function validate(){
    var username=document.getElementById("username").value
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    var confirm_password=document.getElementById("confirm_password").value

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkconfirm_password(password,confirm_password)
    
}

function checkusername(username){
    // username should contain only strings and Numbers and not includes special characters except space
    var regex = /^[A-Za-z0-9 ]+$/;
    //  user name should contain alphabets
    // var regex=/[a-zA-Z]/;
    // user name shouldn't contain any number
    // var regex=/^([^0-9]*)$/;
    // username should not start with any numbers
    // var regex=/^([^\d])/;&& regex.test(username)
    if(username.length>=8 && regex.test(username)){
        // classList.add("error")
        //when we r deleting wrong username at that time it should be border green
        document.getElementById("username").classList.add("success")
        document.getElementById("username").classList.replace("error","success")
        document.getElementById("username_error").innerText=""

    }
    else
    {
        document.getElementById("username").classList.add("error")
        document.getElementById("username_error").innerText="username length should be atleast 8 & not includes any special charcters except space"
    }
}

function checkemail(email){
    if(email.length>=8 && email.includes("@gmail.com")){
        document.getElementById("email").classList.add("success")
        document.getElementById("email").classList.replace("error","success")
        document.getElementById("email_error").innerText=""
    }
    else{
        document.getElementById("email").classList.add("error")
        document.getElementById("email_error").innerText="email should be valid & length should be atleast 8"
    }
}

function checkpassword(password){
    if(password.length>=8){
        document.getElementById("password").classList.add("success")
        document.getElementById("password").classList.replace("error","success")
        document.getElementById("password_error").innerText=""
    }
    else{
        document.getElementById("password").classList.add("error")
        document.getElementById("password_error").innerText="password should be length of atleast 8"
    }
}

function checkconfirm_password(password,confirm_password){
    if(password==confirm_password && confirm_password !=""){
        document.getElementById("confirm_password").classList.add("success")
        document.getElementById("confirm_password").classList.replace("error","success")
        document.getElementById("confirm_password_error").innerText=""
    }
    else{
        document.getElementById("confirm_password").classList.add("error")
        document.getElementById("confirm_password_error").innerText="please make sure your passwords match"

    }
}