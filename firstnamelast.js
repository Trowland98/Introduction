function User() {
    var firstName=document.getElementById('firstName').value;
    var lastName=document.getElementById('lastName').value;
    var FullName=firstName + " " +lastName;
    document.getElementById("result").innerHTML="Your full name is " + FullName;
    console.log(FullName)
    }
