// // Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied.getCurrentValue should return the last answer returned from multiply.

function Multiplier() {
    this.currentvalue = 1;


    this.multiply = function(number) {
        this.currentvalue = this.currentvalue * number;
        return this.currentvalue;
    }

    this.getCurrentValue = function() {
        return this.currentvalue;
    }
}

var newValue = new Multiplier();

console.log(newValue.multiply(5));
console.log(newValue.multiply(10));
console.log(newValue.multiply(15));
console.log(newValue.multiply(20));

console.log(newValue.getCurrentValue());


// Implement an object model that allows you to store strings that represent a Photo. 
// Your model should include an Album object that can contain many Photo objects in its photos attribute. 
// Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. 
// Each Photo should store the photo's file name and the location the photo was taken in as strings. 
// Create instances of each object defined to prove that your object model works.

function Photos(name, location) {
    this.name = name;
    this.location = location;
    }

    function Album() {
        this.photos = [];

        this.addPhoto = function(photo) {
            this.photos.push(photo);
    }

        this.cyclePhotos = function() {
            for (let myPhoto of this.photos) {
                return myPhoto;
            }
        }
    }

var firstAlbum = new Album();

var photo1 = new Photos("Wedding Pics", "Cape May");
var photo2 = new Photos("Honeymoon Pics", "Malaga");
var photo3 = new Photos("Georgia Trip", "Tybee Island");

firstAlbum.addPhoto(photo1);
firstAlbum.addPhoto(photo2);
firstAlbum.addPhoto(photo3);

console.log(firstAlbum);
console.log(firstAlbum.cyclePhotos());


// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
// Each of these objects should have attributes and methods pertinent to what they describe. 
// Also create a School object that should be able to store instances of students and teachers. 
// Make sure to write code afterwards that creates instances of these objects to make sure that 
// what you've written works well and you're able to store the necessary data in each object.

function Person(name, email) {
    this.name = name;
    this.email = email;
}

function Teacher(name, email, subject) {
    this.subject = subject;

    Person.call(this, name, email);

    this.getInfo = function() {
        console.log(name + ' , ' + email + ' , ' + subject);
    }

    Teacher.prototype = Object.create(Person.prototype);
}

function Student(name, email, grade) {
    this.grade = grade;

    Person.call(this, name, email);

    this.getInfo = function() {
        console.log(name + ' , ' + email + ' , ' + grade);
    }

    Student.prototype = Object.create(Person.prototype);
}

function School(name, location) {
    this.name = name;
    this.location = location;
    this.catalog = [];


    this.addPerson = function(person) {
        this.catalog.push(person);
    }

    this.schoolDirectory = function() {
        for (let person of this.catalog) {
            return Person.getInfo;
        }
    }
}

var jake = new Teacher("Jake", "jakeflake@mgmail.com", "math");
var mickey = new Teacher("Mickey", "mickeymouse@gmail.com", "science");
console.log(jake.getInfo());
console.log(mickey.getInfo());

var hugo = new Student("Hugo", "hugoboss@gmail.com", "12th");
var tim = new Student("timwim@gmail.com", "computer science", "9th");
console.log(hugo.getInfo());
console.log(tim.getInfo());

var phillyHigh = new School("Philly High School", "Philadelphia");
var jerseyHigh = new School("Hackensack High School", "Hackensack");

console.log(phillyHigh);
console.log(jerseyHigh);

phillyHigh.addPerson(hugo);
phillyHigh.addPerson(jake);
phillyHigh.schoolDirectory();

jerseyHigh.addPerson(tim);
jerseyHigh.addPerson(mickey);
