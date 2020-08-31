class User {
    constructor(first, last) {
      this.first = document.getElementById('firstName').value;
      this.last = document.getElementById('lastName').value;
    }
  present() {
    return "Your full name is " + this.first + " " + this.last
  }
}

let fullName = new User(firstName, lastName);
document.getElementById("result").innerHTML = fullName.present();
