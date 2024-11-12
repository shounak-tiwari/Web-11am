function run() {
    let first = document.getElementById("first").value
    let last = document.getElementById("last").value
    let email = document.getElementById("email").value
    let info = document.getElementById("information").textContent

    // document.write(info)

    // document.write(first)
    // document.write(last)
    // document.write(email)

    // let sub = document.getElementById('sub')
    // sub.innerHTML = "submited"
    // sub.style.backgroundColor ="red";
    // sub.style.color="white"

    let date_of_birth =  document.getElementById('dob').value


    let date = new Date(date_of_birth)

    let dobdate = (date.getDate())
    let dobmonth = ((date.getMonth()+1))
    let dobyear = (date.getFullYear())


    let current_date = new Date()

    let curr_date =  current_date.getDate()

    let curr_month = (current_date.getMonth()+1)

    let curr_year = current_date.getFullYear()


    // document.write("Date of birth : "+dobdate +"/"+dobmonth+"/"+dobyear)

    // document.write("Current date : " +curr_date+"/"+curr_month+"/"+curr_year)


    let result_year  = curr_year-dobyear

    document.write(result_year + "/ ")

    if (dobmonth>curr_month) {
        result_year--;
        
        document.write(12-(dobmonth-curr_month))
    }

    document.write(result)


    return false
}