class User {
  constructor(fName, lName){
    this.fName = fName;
    this.lName = lName;
  }
  logFullName(){
    console.log(this.fName, this.lName);
    return this;
  }
  show(){
    document.getElementById("result").innerHTML="Your full name is " + this.fName + " " + this.lName;
  }
}
function fullName(){
  const first = document.getElementById('firstName').value;
  const last = document.getElementById('lastName').value;
  var fullname = new User(first,last);
  fullname.logFullName();
  fullname.show();
}
