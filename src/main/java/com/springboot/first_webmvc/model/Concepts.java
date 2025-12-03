package com.springboot.first_webmvc.model;

public class Concepts {

	
	/*
	 * Spring MVC - Form Tag library
	 * 
	 * -> build dynamic, data bound HTML forms in web applications
	 * -> Bind HTML form fields to Java model objects(POJOs) very easily
	 * -> reduce boilerplate code
	 * -> handle validation and error messages
	 * -> spring take care of reading / writing the values (form) automatically
	 * 
	 * JSP -> Java Server Pages
	 * -> server side technology - used to create dynamix web pages using Java
	 * -> Allows you you to mix - HTML code and Java Code
	 *                           : page layout and design
	 *                           : Java COde - for dynamic content - dispaly data from db, from submission
	 * -> enhanced HTML page with Java capability
	 * -> JSP page -> what happens when JSP runs on server
	 *             -> its is compiled into a Servlet (a Java class)
	 *             -> The Java code executes on server
	 *             -> output (pure HTML) is sent back to browser
	 * 
	 * jsp pages in path -> src/main/webapp/WEB-INF/jsp -> not directly accessible in your browser
	 */
	
	/*
	 * Web Service :
	 * 
	 * -> s/w component that allows two applications 
	 * -> which can be running on different platforms
	 * -> use different languages
	 * -> communicate each other over a network (internet)
	 * 
	 * -> Web Service exposes a set of operations (APIs)
	 * -> that other applications can call using standard protocol
	 * -> Http and data format - JSON data format
	 * 
	 * -> banking app -> show live currency exchange rate
	 * -> maintain your own exchange rate - setup 
	 * -> instead of consume a web service - provided by another system 
	 * -> another system - maintain exchange rate 
	 * -> get that information via hTTP requests
	 * 
	 * -> widely used in distributed systems and microservices 
	 * -> ecommerce - payment service, order service, customer service, delivery service
	 * 
	 * -> Monolithic Architecture : entire application is one single application
	 * 
	 * -> Microservices Architecture : entire application is created as microservices, not as one application
	 * 
	 * -> ecommerce - payment service - one sb project, order service - another, customer service, delivery service
	 * 
	 * -> project -> creating rest apis -> 
	 * 
	 * Types of Web Services :
	 * 
	 * 1. SOAP Web Service : Simple Object Access Protocol 
	 *                     : Data Format : XML
	 *                     : Protocl : SOAP Protocol
	 *                     
	 * 2. REST Web Service : Representational State Transfer
	 *                     : Data Format : JSON , XML, YAML
	 *                     : Protocol : HTTP
	 *
	 * -> lightweight, arhchitectural style for designing network applications, fast, scalable
	 * -> REST -> allows communication over HTTP
	 * 
	 * -> Rest Web Service -> exposes resources (like users, orders, products etc) 
	 *                     -> that can be accessses and manpulates using standard HTTP methods
	 *   Resource : everything is treated as a resource
	 *   URI : each resource is identified by a URI
	 *   HTTP Methods : perform actions on resources
	 *   Stateless : ech request is independent  - that server does not store client's state
	 *   
	 *   HTTP Methods :
	 *   
	 *   GET : Retreieve a resource -> GET  http://localhost:9090/users - All users
	 *                                      http://localhost:9090/users/101 - specific user data
	 *   POST : Create a new resource -> POST http://localhost:9090/users
	 *   
	 *   PUT : Update resource -> PUT http://localhost:9090/users/101
	 *   
	 *   DELETE : Delete resource -> DELETE http://localhost:9090/users/101
	 *   
	 *   @RestCOntroller -> 
	 *   
	 *   HTTP Status Codes :
	 *   
	 *   200 OK -> request successful
	 *   
	 *   201 Created -> resource created -> POST new record
	 *   
	 *   204 No content -> deleted or updated successfully
	 *   
	 *   400 bad request -> invalid input -> missing some required fields ->  http://localhost:9090/users
	 *   
	 *   404 not found -> resources ot found -> http://localhost:9090/users
	 *   
	 *   500 internal server error -> server side failure -> db error
	 * 
	 *   Flow Diagram :
	 *   
	 *   Client (Postman / Browser / Mobile) :
	 *       -> HTTP request (Get, ......)
	 *       
	 *   Spring Boot Rest Controller  - accepting API request dto -> entity
	 *       -> Service Layer (Buisness Logic)
	 *       
	 *   Repository Layer (JDBC)
	 *       -> Fetch data from db - result -> in form of enitity
	 *       
	 *   Controller return JSON response -> need Dto , entity -> dto
	 *       -> HHTp Response 200 ok
	 *       
	 *   Client recieves data 
	 *       
	 * 
	 * Hotel Mgmt Project
	 * 
	 * model 
	 * 
	 * service
	 * 
	 * controller - REST endpoints
	 * 
	 * exeption handling
	 * 
	 * repository layer 
	 * 
	 * util 
	 * 
	 * dto
	 * 
	 * SB project -> web , jdbc , mysql connector, validation, dev tools
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 */
	
	
}
