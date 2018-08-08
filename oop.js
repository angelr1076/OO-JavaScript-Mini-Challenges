// Problem #1
// Create an object called Multiplier with two methods: multiply and getCurrentValue. 
function Multiplier() {
    this.currentvalue = 1;

// multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied.
    this.multiply = function(number) {
        this.currentvalue = this.currentvalue * number;
        return this.currentvalue;
    }

// getCurrentValue should return the last answer returned from multiply.
    this.getCurrentValue = function() {
        return this.currentvalue;
    }
}


var newMultiple = new Multiplier();

console.log(newMultiple.multiply(5));
console.log(newMultiple.multiply(10));
console.log(newMultiple.multiply(15));
console.log(newMultiple.multiply(20));

console.log(newMultiple.getCurrentValue());

// Problem #2
// Implement an object model that allows you to store strings that represent a Photo. 
// Each Photo should store the photo's file name and the location the photo was taken in as strings. 
function Photo(name, location) {
    this.name = name;
    this.location = location;
}

// Your model should include an Album object that can contain many Photo objects in its photos attribute. 
function Album() {
    this.photos = [];

// Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. 
    this.addPhotos = function(photo) {
        this.photos.push(photo);
    }

    this.cyclePhotos = function() {
        for (let allPhotos of this.photos) {
            console.log(allPhotos);
        }
    }
}

var photoAlbums = new Album();
// Create instances of each object defined to prove that your object model works.
var photo1 = new Photo("wedding pics", "cape may");
var photo2 = new Photo("honeymoon pics", "malaga");
var photo3 = new Photo("georgia trip", "tybee island");

photoAlbums.addPhotos(photo1);
photoAlbums.addPhotos(photo2);
photoAlbums.addPhotos(photo3);

photoAlbums.cyclePhotos();


//Problem 3. 
// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
function Person(name, email) {
    this.name = name;
    this.email = email;
}

function Teacher(name, email, subjectTaught) {
    this.subjectTaught = subjectTaught;

    Person.call(this, name, email);

// Each of these objects should have attributes and methods pertinent to what they describe.
    this.getInfo = function() {
        return name + ' , ' + email + ' , ' + subjectTaught;
    }

    Teacher.prototype = Object.create(Person.prototype);
}

function Student(name, email, classes) {
    this.classes = classes;

    Person.call(this, name, email);

// Each of these objects should have attributes and methods pertinent to what they describe.
    this.getInfo = function() {
        return name + ' , ' + email + ' , ' + classes;
    }

    Student.prototype = Object.create(Person.prototype);

    }

// Also create a School object that should be able to store instances of students and teachers.
function School(name, location) {
    this.name = name;
    this.location = location;
    this.members = [];


    this.addMembers = function(member) {
        this.members.push(member);
    }

    this.cycleMembers = function() {
        for (let index of this.members) {
            return index;
        }
    }
}

// Make sure to write code afterwards that creates instances of these objects to make sure that 
// what you've written works well and you're able to store the necessary data in each object.
var gil = new Teacher("math", "12th", "Gillian", "gillrill@gmail.com");
var max  = new Teacher("science", "10th", "maxwax@gmail.com");
// console.log(gil.getInfo());

var herbert = new Student("calculus", "9th", "Herbie", "herbiemakestoys@gmail.com");
var jim = new Student("biology", "11th", "Jimmy", "neutron@gmail.com");
// console.log(herbert, jim);

var hackensackHigh = new School("Hackensack High School", "Hackensack");
var phillyHigh = new School("Philly High", "Philadelphis");


hackensackHigh.addMembers(herbert);
hackensackHigh.addMembers(gil);
phillyHigh.addMembers(max);
phillyHigh.addMembers(jim);

console.log(hackensackHigh.cycleMembers());
console.log(phillyHigh.cycleMembers());
