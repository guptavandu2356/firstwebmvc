
// var , let, const

/* var language = "JavaScript";
var language = "Python";  // no error
console.log("Value using var : ", language);

let language2 = "JavaScript";
// let language2 = "Python"; error
language2 = "New Value - JavaScript";
console.log("Value using let : ", language2);

const pie = 3.14;
// pie = 3.47; error
console.log("Value using const : ", pie);

// block scope - function scope

function testScope() {
	
	if(true) {  // block
		
		var x = 10; //function scoped
		let y = 20;  // block scoped
		const z = 30; // block scoped
		console.log("From block : ", x);
		console.log("From block : ", y);
		console.log("From block : ", z);
	}
	
	console.log("From function : ", x); // printed - function scope
	console.log("From function : ", y); // error
	console.log("From function : ", z); // error
	
}

testScope();

// Operators :
// Arithmetic Operators : +,-,*,/,%,**
// Comparison Operators : ==, !=, ===, !==
//      -> == compres values only
console.log(5=="5");  // int string, value same, data type diff, give true result
                      // performs type conversion, "5" is converted t0 5 before comaprison
console.log(5==="5"); // false , compares value and type, no conversions, strict comparison
console.log(7 != "8"); // compare value only, true
console.log(7 !== "8"); // compare value and data type both, false

// Logical Operators 
// && || NOT
let age = 25;
console.log(age>18 && age<30);
console.log(age>18 || age<30);
console.log(!age>18);

//Ternary Operator ?:
let marks = 50;
let result = marks>=50 ? "Pass" : "Fail";
console.log(result)

// Template Literals
// - introduced on ES6 - new way to create strings in Js
// - more powerful and flexible than normal strings
// - using backticks
// - "string value"
// = `string value`

// older way
let name = "Vandana";
let age = 35;
let message = "Hello, " + name +"!";
// template literal
// String Interpolation - insert varaibles inside a string
let messageTl = `Hello, ${name}!, Age : ${age}`;
console.log(messageTl);

// embed expressions - Math, functions
let a = 10;
let b = 20;
let result = `Sum : ${a+b}`;
console.log(result);

function welcome(name){
	return `Hello ${name}`;
}
let msgFunc = `Message: ${welcome("Vandana")}`;
console.log(msgFunc);

// Multi line strings
let msg = `
Line 1 - content 1
Line 2 - content 2
Line 3 - content 3
`;
console.log(msg);

// embed Arrays and objects
let nums = [101,102,103];
console.log(`Numbers : ${nums}`)

// object
let user = {	
	name: "Vandana",
	city: "New Delhi"	
};
let info = `User ${user.name} lives in ${user.city}`;
console.log(info);

// Strings, Arrays, Objects

// Strings

let str = "JavaScript ES6";
console.log("Length :", str.length);
console.log("Uppercase : ",str.toUpperCase());
console.log("Lowercase : ",str.toLowerCase());
console.log("Substring :", str.substring(0,10)); // fetching first 10 characters
console.log("Includes 'Script' : ", str.includes("Script"));
console.log("Starts with 'Java' : ", str.startsWith("Java"));
console.log("Ends with '6' : ", str.endsWith("6"));

// split and join strings

let data = "HTML,CSS,JS,React";
let topics = data.split(','); // splitted based on ','
console.log("Splitted Data : ", topics);

let joinedData = topics.join(" | ");
console.log("Joined Data : ", joinedData);

// Repalce and Trim
let msg = "  Learning Js E6 in this session.   ";
console.log("Trimmed Msg : ", msg.trim());
console.log("Replaced Msg : ", msg.replace("E6", "ES6"));

// Arrays
let tech = ["Java","Python","HTML/CSS","ReactJs"];
console.log("Technologies : ", tech);

// access elements
console.log("First Element : ", tech[0]);
console.log("Length of Tech : ", tech.length);

// Add/remove elements
tech.push("Golang"); // add at end
console.log("Technologies : ", tech);
tech.unshift("MySQL"); // add at start
console.log("Technologies : ", tech);

tech.pop();  // remove from last
console.log("Technologies : ", tech);
tech.shift(); //remove from first)
console.log("Technologies : ", tech);

console.log(tech.indexOf("Python"));
console.log(tech.includes("Java"));

// Iterate over Arrays
// For loop
for (let i=0; i<tech.length; i++){
	console.log(`Technology ${i+1}: ${tech[i]}`);	
}
//for - of - loop
for(let t of tech) {
	console.log("Using for-of loop:",t);
}
//forEachLoop
tech.forEach((t, index) => {
	console.log(`Index ${index} : ${t}`);
});


// Higher Order Array Methods
// map() filter() reduce() sort()
//map()
let nums = [11,31,51,21];
let squares = nums.map(x => x**2);
console.log("Squares : ", squares);
//filter()
let above30 = nums.filter(x => x>30);
console.log("Filtered : ", above30);
// reduce() - give you a single output - sum, max
let sumNums = nums.reduce((a, val)=>a+val,0);
console.log("Sum of Nums : ",sumNums);
//sort()
// JS sorts as strings (lexicographical order)
// provide a compare function
// if a-b < 0 -> a before b
// if a-b > 0 -> b before a
// if a-b=0 -> no change 
nums.sort((a,b)=> a-b);  // Ascending Order
console.log("Sorted Nums :",nums);
nums.sort((a,b)=> b-a);  // Descending Order
console.log("Sorted Nums :",nums);

// slice() - extracts a portion without modifying the original array
let nums = [11,31,51,21];
console.log(nums);
let nums2 = nums.slice(1,3); // starts from index 1 - go till <3 - 31,51
console.log(nums2);

// splice() - Add/remove elements - modifies the orginal array
// array.splice(startindex, deleteCount, itemstoadd)
nums.splice(1,2) // starting from index 1 - delete 2 elements [11,21]
console.log(nums);
nums.splice(1,0,34) // [11 34 21]
console.log(nums);

// concat() 
let num3 = [101, 201, 301];
let new_nums = nums.concat(num3);
console.log(new_nums);

// spread operator (...)
// copy one array to another, merge two arrays, add elements
let num4 = [...num3] // copying
console.log(num4);

let num5 = [...nums, ...num4] // merge
console.log(num5);

let arr = [10,20];
let newArr = [5,...arr, 25]; // added elements

// Array Destructuring - extract value in variables out of an array
let tech = ["Java","Python","HTML/CSS","ReactJs"];
let [lang1, lang2, lang3, lang4] = tech;
console.log(lang1);
console.log(lang2);
console.log(lang3);
console.log(lang4);

// skip some value
let [lang11, lang21, ,lang41] = tech;
console.log(lang11);
console.log(lang21);
console.log(lang41);

// Multidimensional Arrays
let matrix = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];
console.log(matrix);

// find() - return first matching element
let numbers = [5,12,8,130,144];
let search_num = numbers.find(n => n>10);
console.log(search_num) //12

// findIndex - return index of first matched element
let search_idx = numbers.findIndex(n => n>20);
console.log(search_idx) //3

// some() - check that atleast one element matches - true or false
console.log(numbers.some(n => n>120));// true

// every() - All elements match -> true
console.log(numbers.every(n => n%2 === 0)) // false

// Array.from() - convert other things to array
let str = "Python"
console.log(Array.from(str)); // convert str into an array [P,y,t....]

// Array.of()- Create array from arguments
let arr_of = Array.of(1001,2001,3001); 
console.log(arr_of);

// nested array 
let nested_arr = [10,[20,30],[40,50]];
// flat() -> flattens the nested array
console.log(nested_arr.flat(1)); // check -> ?
console.log(nested_arr.flat(2));

// flatMap() -> map+flat
let nums_n = [10, 20, 30];
let output = nums_n.flatMap(n => [n, n*2]); // [10,20] [20,40] [30,60] [10,20,20,40,30,60]

// isArray() -> check if value is an array
console.log(Array.isArray([1,2,3])); //true
console.log(Array.isArray("Python")); //false 

// Objects
// key value pairs
let user = {
	name: "XYZ",
	age: 25,
	city: "New Delhi"
};
console.log(user.city);
console.log(user["age"]);
// update 
user.city = "Mumbai";
console.log(user.city);
// add new properties
user.email = "xyz@gmail.com";
console.log(user.email);
// delete properties
delete user.email;

// Objects with methods - functions inside objects
let student = {
	name: "Student 1",
	marks: 90,
	display: function(){
		console.log("Marks scored : "+this.marks)
	}
};
student.display() // -> 

//Nested Objects
let employee = {
	name: "XYZ",
	age: 25,
	address: {
		city: "New Delhi",
		pincode: 123456,
		state: "Delhi"
	}
};
console.log(employee.address.city) // New Delhi

// Array of objects - most used - hotel(object) - list of all hotels - array of objects
let emps =[
	{id:101, name: "Emp 1", email: "e1@gmail.com"},
	{id:201, name: "Emp 2", email: "e2@gmail.com"},
	{id:301, name: "Emp 3", email: "e3@gmail.com"},
	{id:401, name: "Emp 4", email: "e4@gmail.com"},
];
console.log(emps[0]);
console.log(emps[1].email);*/

// loop through objects
let student = {
	name: "Student 1",
	marks: 90,
	course: "Computer Science"
};

for( let key in student){
	console.log(key," : ",student[key]);
}

// keys() - return keys ony
// values() - return values
// entries() - whole entry of object
console.log(Object.keys(student)) // name, marks, course
console.log(Object.values(student)) // values - 3
console.log(Object.entries(student)) // [[][][]]

// Spread operator with objects
// copy 
let student_new = {...student};
console.log(student_new);

//merge
let st = {
	email: "s1@gmail.com",
	city: "New Delhi"
};
let student_merged = {...student, ...st};
console.log(student_merged);

// object destructuring
let product = {
	id: 101,
	name: "Laptop",
	price: 50000.00
};
let {id, name, price} = product;
console.log(id, name, price);

// Constructor Functions - create many objects
function Person(name,age,city){
	this.name = name;
	this.age = age;
	this.city = city;	
}
let p1 = new Person("Ankit",25,"New Delhi");
let p2 = new Person("Ankita", 26, "Mumbai");
console.log(p1, p2);

// Object.freeze() - no change allowed
let obj = {a:10};
Object.freeze(obj);
obj.a = 20;
console.log(obj.a); //10

// seal() -> properties cannot be added or removed but can be modified
let obj2 = {b:30};
Object.seal(obj2);
obj2.b = 40;
console.log(obj2.b); // 40 
obj2.c = 50;
console.log(obj2.c); // cannot be done

// Optional Chaining -> ? ->
// used to aviod errors when accessing nested properties
let employee = {
	name: "XYZ",
	age: 25,
	address: {
		city: "New Delhi",
		pincode: 123456,
		state: "Delhi"
	}
};
console.log(employee.address?.city) // city value
console.log(employee.address?.street) // undefined

// send some data over network - JSON format
// {"name":"Emp1", "age":25} 

// Conversions - object -> JSON or JSON -> object

// convert object -> JSON :
let jsonStr = JSON.stringify(employee);

// JSON -> object
let obj_json = JSON.parse(jsonStr);
console.log(obj_json);

// switch -> take 3 inputs - num1, num2, opertor -> + (add) , - (sub), * (mul), /(div) 
// default case

// while -> 
// let data =[10, "string1",.....] -> 4 nos, 3 strings
// using while - create a new array that contain number only







































































