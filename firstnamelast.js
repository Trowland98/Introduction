class User {
  constructor(first) {
    first = document.getElementById("firstName").value;
    this.firstname = first;
  }
  present() {
    return 'Your name must be ' + this.firstname + " ";
  }
}

class Sur extends User {
  constructor(first, last) {
    super(first);
    last = document.getElementById("lastName").value;
    this.lastname = last
  }
  show() {
    return this.present() + this.lastname;
  }
}

fullname = new Sur(this.firstname, this.lastname);
document.getElementById("result").innerHTML = fullname.show();
