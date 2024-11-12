function Validate(){

    // document.write("this is error")
    // name regular expression
    let Name  = /^[a-zA-Z ]{2,30}$/ ;

    // email regular expression

    // Email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    let Email =     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



    // contact regular expression 
    let Contact = /^([+]\d{2})?\d{10}$/
    
    let contact = document.getElementById("contact").value;


    let ContactError = document.getElementById("ContactError")
    // first name object 
    let first = document.getElementById("first").value;
    // first error obj
    let FirstError = document.getElementById("FirstError")
    // email object
    let email = document.getElementById("email").value

    let EmailError  = document.getElementById("EmailError")


    if (Name.test(first)) {        
        FirstError.textContent="*first name is valid"
    }
    else{
        FirstError.textContent = "*first name not valid "
        // return false;
    }

    
    
    if (Email.test(email)) {
     
     EmailError.textContent = "valid mail"
    }
    else{
        EmailError.textContent = "Not valid mail"
    }


    if(Contact.test(contact)){
        ContactError.textContent = "*correct"
        ContactError.style.color = "green"
    }
    else{

        ContactError.textContent= "*not correct "
    }


    if (Email.test(email) && Name.test(first) && Contact.test(contact)) {
        return true;
    }
    return false
    // return false;
}