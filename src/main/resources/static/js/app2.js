
/*DOM, Events, Query Methods and Listeners

DOM - Document Object Model

-> tree like representation of the HTML document - the browser build when it loads the page
-> Every HTML element becomes a node
-> Js can read and modify the DOM to change content, structure and style while the page is running

HTML index.html -> div, form, button -> in js file -> DOM -> 

DOM in JS - preogramming interface for web based documents
- HTML, XML

where each object corresponds to a part of the document - element, attributetext

enabling interactive and dynamic web feature

Query Methods - access DOM nodes

1. document.getElementById(id) : return a single element whose is matches

2. document.getElementByClassName(className) : return a HTML collection of elements with that calss

3. document.getElementByTagName(tagName) : return a HTML collection of elements with that tah

4. document.querySelectorAll(selector) : return a static nodeList of all matching elements

5. document.querySelector(selector) : return the first element matching the selector

Events - actions that happen in the browser - click, input, submit, mouseover
-> event occur - the browser creates an event object => sent to event handlers

properties and methods - event

event.type -> type of event -> click, mouseover
event.target -> actual element that triggered the event
event.currentTarget -> element the handler is attached to
event.preventDefault -> prevent the browsers default action - link navigation, form submit
event.stopPropagation - stop the event moving further 

Event Listeners :

element.addEventListener(eventType, handler, options ------)
element.removeEventListener(eventType, handler)*/

// == Getting elements using query methods :

const btnHello = document.getElementById('btn-hello'); // by id, fastest DOM query fastest
const btnAdd = document.querySelector('#btn-add'); // select using CSS selector
const btnToggle = document.querySelector('#btn-toggle'); 
const form = document.getElementById('demo-form');
const input = document.getElementById('text-input');
const itemList = document.getElementById('items-list');
const log = document.getElementById('log');
const items = document.querySelectorAll('#items-list.item');

// Helper Function - Logging Messages

function appendLog(message) {
	const time = new Date().toLocaleTimeString(); // current time
	log.textContent += `\n[${time}] ${message}\n`;
	log.scrollTop = log.scrollHeight; // log auto-scrollss
}

//Event Listeners

// 1. Hello Button - Click Event
btnHello.addEventListener('click', function (ev) {
	appendLog('Hello Button Clicked.');
	alert('Hello from Hello Button!'); //popup alert
});


// 2. Add Item Button - dynamically add list items
btnAdd.addEventListener('click', function (ev) {
	const li = document.createElement('li'); // <li> - create new element - <li>
	li.className = 'item';
	li.textContent = 'Item '+(itemList.children.length + 1) // Item 3
	itemList.appendChild(li);
	appendLog('Added : '+li.textContent);
});

//3.Toggle (show/hide) input visibility
btnToggle.addEventListener('click', () => {
	if(input.style.display === 'none') {
		input.style.display = 'inline-block';
		appendLog('Input shown');
	}
	else {
		input.style.display = 'none';
		appendLog('Input hidden');
	}	
});

// 4. Submit - form submit  preventDefault
form.addEventListener('submit', function (event) {
	event.preventDefault(); // prevent actual for submission / page relaod
	const value = input.value.trim();
	if (value){
		appendLog('Form submitted with :' + value);
		input.value =''; //clear the value
	}
	else {
		appendLog('Form submitted with empty input');
	}
});

// Requirements : to do task 
// input box -> user type task
// Add task button 
// should get added in a list
// for every item - delete button
// delete - item should get deleted
















