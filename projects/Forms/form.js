document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const firstName= document.getElementById("firstNameInput").value;
    const lastName= document.getElementById("lastNameInput").value;
    const studentID= document.getElementById("idInput").value;
    const phone= document.getElementById("phInput").value;
    const email= document.getElementById("emailInput").value;
    const birthdate= document.getElementById("dateInput").value;
    const age= document.getElementById("age").value;
    const gender= document.querySelector("input[name='gender']:checked")?.value;
    const address1= document.getElementById("add1Input").value;
    const address2= document.getElementById("add2Input").value;
    const city= document.getElementById("cityInput").value;
    const state= document.getElementById("state").value;
    const zip= document.getElementById("zipInput").value;
    const username= document.getElementById("username").value;
    const password= document.getElementById("password").value;
    const confirmPassword= document.getElementById("confirmPasswordInput").value;
    const comment= document.getElementById("comment").value;
    const terms= document.querySelector("input[name='terms']").checked;
    const communications= document.querySelector("input[name='com']").checked;
    
    if (!firstName || !lastName) {
        alert("Please provide your full name.");
        return;
    }

    if (!age || age < 18) {
        alert("You must be 18 years or older to submit this form.");
        return;
    }

    if (!terms) {
        alert("You must agree to the terms to submit the form.");
        return;
    }

    const formData = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        terms: terms,
    };

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerText = response.message;
            document.getElementById("form").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert("Error submitting the form. Please try again.");
        }
    };

    xhr.send(JSON.stringify(formData));
    console.log(formData);
});
