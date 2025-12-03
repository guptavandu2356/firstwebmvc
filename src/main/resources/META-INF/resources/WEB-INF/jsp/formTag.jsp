<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<!-- Taglib directives -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="ISO-8859-1">
    <title>User Form</title>
</head>
<body>
    <h2 style="text-align:center">Spring Form Tag Library Example</h2>

    <!-- Form bound to "user" model attribute -->
    <form:form method="post" modelAttribute="user" action="${pageContext.request.contextPath}/formTag">

        <div>
            <form:label path="name">Name:</form:label>
            <form:input path="name" cssClass="text-input" />
        </div>

        <div>
            <form:label path="email">Email:</form:label>
            <form:input path="email" type="email" cssClass="text-input" />
        </div>

        <div>
            <form:label path="age">Age:</form:label>
            <form:input path="age" type="number" cssClass="text-input" />
        </div>
		
		<div>
			<form:label path="password">Password:</form:label>
			<form:password path="password" id="password" cssClass="text-input" />
		</div>
		
		<div>
		    <form:label path="about">Text area:</form:label>
		    <form:textarea path="about" id="about" rows="5" cols="30" cssClass="text-input" />
		</div>
		
		<div>
		   <form:label path="subscribed">Subscribed : </form:label>
		   <form:checkbox path="subscribed" id="subscribed"
						cssClass="text-input" />
		</div>
		
		<div> 
			<form:label path="interests">Interests:</form:label>
			<!-- items should be collection<string> in model-->
			<form:checkboxes path="interests" items="${interestOptions}" />
		</div>	
		
		<div >
		  <form:label path="gender">Gender: </form:label>
		  <form:radiobutton path="gender" value="Male" /> Male
		  <form:radiobutton path="gender" value="Female" /> Female
		</div>	
		
		<div>
			<p>Country :</p>
			<form:select path="country" id="countrySelect">
				<form:option value="india">India</form:option>
				<form:option value="us">United States</form:option>
				<form:option value="uk">United Kingdom</form:option>
			</form:select>
		</div>	
		
		<div>
		<form:label path="languagesSelected">Languages:</form:label>
		<form:select path="languagesSelected" multiple="true"  items="${languageOptions}"/>
		</div>
				
		

        <div>
            <input type="submit" value="Submit" />
        </div>

    </form:form>

    <p><a href="${pageContext.request.contextPath}/">Home</a></p>
</body>
</html>
