// Define the Person class
class Person {
    constructor(name, age, college, phoneNumber) {
      this.name = name;
      this.age = age;
      this.college = college;
      this.phoneNumber = phoneNumber;
    }
  
    displayDetails() {
      return `Name: ${this.name}, Age: ${this.age}, College: ${this.college}, Phone Number: ${this.phoneNumber}`;
    }
  
    // Arrow function as a non-member function
    greet = () => {
      return `Hello, I'm ${this.name}`;
    }
  }
  
  // Create a Person object
  const person = new Person("Aastha Jajoo", 19, "VESIT", "9876543210");
  
  // Display Person details
  console.log(person.displayDetails());
  console.log(person.greet());
  
  // Define the Student class by inheriting from Person
  class Student extends Person {
    constructor(name, age, college, phoneNumber, rollNumber) {
      super(name, age, college, phoneNumber);
      this.rollNumber = rollNumber;
    }
  
    displayDetails() {
      return `Name: ${this.name}, Age: ${this.age}, College: ${this.college}, Phone Number: ${this.phoneNumber}, Roll Number: ${this.rollNumber}`;
    }
  
    // Arrow function as a member function
    study = () => {
      return `${this.name} is studying.`;
    }
  }
  
  // Create a Student object
  const student = new Student("John Doe", 20, "VESIT", "9876543211", 12345);
  
  // Display Student details
  console.log(student.displayDetails());
  console.log(student.study());
  
  // Demonstrate generating an exception for erroneous data entry
  if (student.rollNumber === 0) {
    throw new Error("Roll number cannot be zero.");
  }
  