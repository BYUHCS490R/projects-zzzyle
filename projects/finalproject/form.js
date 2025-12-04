        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const fullname = document.getElementById('fname').value;
            const email = document.getElementById('email').value;

            if (!fullname || !email) {
                alert("You need a name and email.");
                return;
            }

            const formData = {
                name: fullname,
                email: email
            };

            console.log("Sending JSON:", JSON.stringify(formData));


            const response = {
                message: "User added successfully"
            };

            //document.getElementById('myForm').innerHTML = '';
            //document.getElementById('message').innerText = response.message;

            const xhr = new XMLHttpRequest();
            xhr.open("GET", "project.json", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert("Form Submitted successfully!");
                    const response = JSON.parse(xhr.responseText);
                    console.log(response);
                    document.getElementById('myForm').innerHTML = '';
                    document.getElementById('message').innerText = response.message;
                } else if (xhr.readyState === 4) {
                    alert("Error submitting form");
                }
            };

            xhr.send(JSON.stringify(formData));
        });