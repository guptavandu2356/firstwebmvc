
/* Promises - async, await, fetch, try...catch

Javascript - single threaded - it can do only one thing at a time

Many tasks consumes time :

Fetch data from server API calls - 
Reading files
DB ops
large processing

If Js waited - blocked for all such tasks - browser will freeze

JS uses asysnchronous programming - it can let slow tasks run in the background
while rest of the code can continue

Implement this - Promises - async, await, fetch, try...catch

Promise : represents a value that will be available now, later or never
        : 3 states 
		-> 1. pending : running
		-> 2. fulfilled : success
		-> 3. rejected : failure
handle slow operations without blocking program

new Promise((resolve, reject))

fetch() : browser API , promise based for calling servers
        : call URLS / APIs - GET, POST, PUT, DELETE
		: returns a Promise
	
W/o Async Await:
	
fetch("http://jsonplaceholder.....")
      .then(response ....)
	  .then(data.....)
	  .catch(err..........)
	  

async / await :

async -> makes a function asynchronous 
await -> waits for the Promise to finish (inside async function only)
more better or more cleaner way to use promises

async function getData(){
	const result = await fetch("..................")
	const data = await result.json();
	
}

try / catch block :

async function getData(){
	
	try {
	const result = await fetch("..................")
	const data = awat result.json();
	}
	catch (error) {
		
	}
}
Promise - long ayanc work like API
fetch - API call
async/await - cleaner
try / catch */

// Element References 

const btnLoad = document.getElementById('btnLoad');
const statusEl = document.getElementById('status');
const usersList = document.getElementById('usersList');
const addForm = document.getElementById('addForm');
const resultEl = document.getElementById('result');

const API_Base = 'https://jsonplaceholder.typicode.com';

// Helper : show status message
function setStatus(text){
	statusEl.textContent = text;
}

// Helper : append a single user to the list
function appendUser(user){
	const li = document.createElement('li');
	li.textContent = `${user.id ? user.id + ' - ' :''} ${user.name} (${user.email})`;
	usersList.append(li);	
}


// asycn - GET Users

async function fetchUsers() {
	setStatus('Loading Users......');
	try {
		
		// fetch - return Promise - resolve to a Response object
		const response = await fetch(`${API_Base}/users`); // GET by default
		
		// check for HTTp status
		if(!response.ok){
			throw new Error
			(`Server response with ${response.status} ${response.statusText}`);
		}
		
		// response.json() returns a Promise 
		const users = await response.json();
		
		// clear previous list
		usersList.innerHTML = '';
		
		// show results 
		users.forEach(user => appendUser(user));
		setStatus(`Loaded ${users.length} users`);
		
	}
	catch (error) {
		console.error('fetchUsers : ', error);
		setStatus('Erro loading users : '+error.message);
	}
}

// POST - new user - send the data to the server
async function createUser(payLoad) {
	setStatus('Sending new user to the server...');
	try {
		const response = await fetch(`${API_Base}/users`, {
			method : 'POST',
			headers : {
				'Content-Type' : 'application/json'
			},
			body : JSON.stringify(payLoad) // convert object to JSON
		});
		
		// check for HTTp status
		if(!response.ok){
		throw new Error
		(`Server response with ${response.status} ${response.statusText}`);
		}
		
		// parse response body
		const created = await response.json();
		
		// show created object
		resultEl.textContent = 'Created user {server response}: '+JSON.stringify(created);
		setStatus('User created successfully...');
		
		appendUser(created);
		return created;
	}
	catch (error) {
			console.error('Create user error : ', error);
			setStatus('Error creating user : '+error.message);
			throw error;
	}
	
}

// add lsitener -> addForm - submit

btnLoad.addEventListener('click',() => {
	fetchUsers();
})

addForm.addEventListener('submit', (ev) => {
	ev.preventDefault();
	// gather data from form
	const name = document.getElementById('name').value.trim();
	const email = document.getElementById('email').value.trim();
	
	// payload object - we will POST
	const payLoad = { name, email };
	
	(async () => {
		try {
			await createUser(payLoad);
			addForm.reset();
		}
		catch (err) {
			console.warn('Add user failed :', err);
		}
	})();
});








