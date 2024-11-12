function ValidateForm(){
    let name = document.getElementById('name').value

    let email = document.getElementById('email').value

    let Nameregex = /^(?!-)[a-zA-Z-]*[a-zA-Z]$/

    let emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let NameError = document.getElementById('NameError')


    if(emailregex.test(email))
    {
        alert("valid email")
    }
    else{   
        alert("invalid email")

    }

    if (Nameregex.test(name) ){
        NameError.textContent = "name  valid"
        return false
    }
    else{
        document.getElementById('name').value = ""
        NameError.textContent = "name not is valid "
        return false
    }

   
    }