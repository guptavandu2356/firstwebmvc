
// import both modules

// math.js - named export { function names }
// import must use same name 
// alias name like - import { cToF as c_f, fToC as f_c }

// log.js - default export - no need {}
// There can be only one default export per module
// import can have any name - not tied to name
// import log 

// module - both named exports and default export
// one default export and multiple names exports

import { cToF, fToC } from "./math.js"; // import must use same name 
import logger from "./log.js";

document.getElementById('btnConvert').addEventListener('click',() =>  {

	const input = document.getElementById('temp').value;
	const mode = document.getElementById('mode').value;
	
	let result;
	
	// if else 
	// mode - cToF -> call function cToF need input
	//               -> result -> add log
	// logger(`Converted ${input}C -> {result}F`)
	//   mode - fToC -> call , result, add log
	
	if (mode === "cToF") {
		result = cToF(Number(input));
		logger(`Converted ${input}C -> ${result}F`);
	}
	else {
		result = fToC(Number(input));
		logger(`Converted ${input}F -> ${result}C`);
	}
	document.getElementById('output').textContent = "Result : "+result;	
	          
});
