class User {
  constructor(first) {
    this.fName = first;
    console.log(fullname);
  }
  present() {
    return 'Your full name is ' + this.fName;
  }
}

class Last extends User {
  constructor(first, last) {
    super(first);
    this.lName = last;
  }
  show() {
    return this.present() + this.lName + ". ";
  }
}

fullname = new User(document.getElementById('firstName').value, document.getElementById('lastName').value);
document.getElementById("result").innerHTML = fullname.show();
