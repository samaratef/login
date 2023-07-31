var signUpInputName=document.getElementById('signUpInputName');
var signUpInputEmail=document.getElementById('signUpInputEmail');
var signUpInputPassword=document.getElementById('signUpInputPassword');
var emailsList=[]
// var signUpBtn=document.querySelector('#signUpBtn')
var index;
var okP=document.getElementById('ok')
var okSign=document.getElementById('okSign')
var signInInputEmail=document.getElementById('signInInputEmail')
var signInInputPassword=document.getElementById('signInInputPassword')
// var signInBtn=document.getElementById('signInBtn')
if(localStorage!=null){
    emailsList=JSON.parse(localStorage.getItem('person'))

}

function addAccount(){
    var person={
        name:signUpInputName.value,
        email:signUpInputEmail.value,
        password:signUpInputPassword.value
    }
    if(validateName()&&validateEmail()&&validatePassword()){
        if(emailsList.length==0){
            okP.innerHTML='Success'
            okP.classList.add('text-success')
            emailsList.push(person)
            localStorage.setItem("person",JSON.stringify(emailsList))
            console.log(emailsList)
        }
        else{
            if((emailsList.some(person => person.name === signUpInputName.value))&&(emailsList.some(person => person.email === signUpInputEmail.value))){
            
                    okP.innerHTML='email already exists'
                    okP.classList.add('text-danger') 
                
                }
            else{
                okP.innerHTML='Success'
                okP.classList.add('text-success')
                emailsList.push(person)
                localStorage.setItem("person",JSON.stringify(emailsList))
                console.log(emailsList)
            }
                
        }
        
        
    }
    else{
        alert("error 'invalid name or email or password'")
    }
    
}

function validateName(){
    var regex=/^[A-Z][a-z]{2,10}$/
    if(regex.test(signUpInputName.value)==true){
        return true;
    }
    else{
        console.log('nnnnnn')
        return false;
    }
}
function validateEmail(){
    var regex=/^[a-z]{2,9}[0-9]{0,9}@[a-z]{3,9}.com$/
    if(regex.test(signUpInputEmail.value)==true){
        return true;
    }
    else{
        console.log('eeeee')
        return false;
    }
}
function validatePassword(){
    var regex=/^[0-9]{2,9}[a-z]{0,9}[A-Z]{0,9}$/
    if(regex.test(signUpInputPassword.value)==true){
        return true;
    }
    else{
        console.log("pppp")
        return false;
    }

}
function signIn(){
    var user={
        email:signInInputEmail.value,
        password:signInInputPassword.value
    }
    if((emailsList.some(user => user.email === signInInputEmail.value))&&(emailsList.some(user => user.password === signInInputPassword.value))){
        console.log('true')
    
    window.location.replace('./home.html')
    // document.getElementById('welcom').innerHTML=`WELCOM ${emailsList.name}`
    }
    else{
        console.log('falase')
        okSign.innerHTML='incorrect email or password'
        okSign.classList.add('text-danger')
    }
    
}
