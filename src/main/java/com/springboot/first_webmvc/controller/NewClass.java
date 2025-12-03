package com.springboot.first_webmvc.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class NewClass {
	@GetMapping("/form")  // method handle GET request to URL /form
	public String showForm() {
		return "redirect:/form.html"; // tell spring to redirect user's browser to static html file form.html
	}
	
}
