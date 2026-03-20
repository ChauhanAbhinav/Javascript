// Deep Copy
// Copies everything (nested objects too) and original not affected at all level
// let obj2 = JSON.parse(JSON.stringify(obj1));
// let obj2 = structuredClone(obj1);

let obj1 = {
  name: "A",
  age: 25,
  address: {
    city: "Jaipur",
    state: "Rajasthan",
    location: {
      pincode: 302001,
      coordinates: {
        lat: 26.9124,
        lng: 75.7873
      }
    }
  }
};

let obj2 = structuredClone(obj1);

console.log("obj1->",JSON.stringify(obj1))
console.log("obj2->",JSON.stringify(obj2))

obj2.name = "B"; // only change in obj2, obj1 will not be affected
obj2.address.city = "Kolkata"; // only change in obj2, obj1 will not be affected because of deep copy, if it was shallow copy then obj1.address.city would also change to "Kolkata"
obj2.address.location.pincode = 202030 // only change in obj2, obj1 will not be affected because of deep copy, if it was shallow copy then obj1.address.location.pincode would also change to 202030
obj2.address.location.coordinates.lat = 20.89 // only change in obj2, obj1 will not be affected because of deep copy, if it was shallow copy then obj1.address.location.coordinates.lat would also change to 20.89

console.log("obj1->",JSON.stringify(obj1))
console.log("obj2->",JSON.stringify(obj2))

obj1.name = "C"; // only change in obj1, obj2 will not be affected
obj1.address.city = "Mumbai"; // only change in obj1, obj2 will not be affected because of deep copy, if it was shallow copy then obj2.address.city would also change to "Mumbai"
obj1.address.location.pincode = 903023 // only change in obj1, obj2 will not be affected because of deep copy, if it was shallow copy then obj2.address.location.pincode would also change to 903023
obj1.address.location.coordinates.lat = 90.89 // only change in obj1, obj2 will not be affected because of deep copy, if it was shallow copy then obj2.address.location.coordinates.lat would also change to 90.89

console.log("obj1->",JSON.stringify(obj1))
console.log("obj2->",JSON.stringify(obj2))