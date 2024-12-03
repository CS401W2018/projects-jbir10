document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const fname= document.getElementById("fname").value;
    const lname= document.getElementById("lname").value;
    const phone= document.getElementById("phInput").value;
    const email= document.getElementById("emailInput").value;
    const fav= document.getElementById("fav").value;
    const c1= document.getElementById("c1").value;
    const c2= document.getElementById("c2").value;
    const com= document.querySelector("input[name='com']").checked;
    
    if (!fname || !lname) {
        alert("Please provide your full name.");
        return;
    }

    const formData = {
        fname: fname,
        lname: lname,
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
