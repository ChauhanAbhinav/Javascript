// Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set:
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },
  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};

let user1 = {
  name: "John",
  surname: "Smith"
};

// getter for full name
let user2 = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};
alert(user2.fullName); // John Smith

// setter for full name
let user3 = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
user3.fullName = "Alice Cooper";
alert(user3.name); // Alice
alert(user3.surname); // Cooper
