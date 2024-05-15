function submitForm(event) {

    event.preventDefault();

    let rName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let gender= document.querySelector('input[name="gender"]:checked').value;
    let dob= document.getElementById('dob').value;
    let course= document.getElementById('course').value;
    let address= document.getElementById('address').value;
    let hobby=document.querySelectorAll('input[name="hobby"]:checked');


    let hobbyValue=[];

    hobby.forEach(
        function(hobby){

            hobbyValue.push(hobby.value); 
        }
    );

    let output = "Name: " + rName + "\n";

    output += "Email: " + email + "\n";

    output += "Password: " + password + "\n";
    output += "Gender: " +gender + "\n";
    output += "DOB: " +dob + "\n";
    output += "Course: " +course + "\n";
    output += "Hobby: " +hobbyValue + "\n";
    output += "Address: " +address + "\n";

    let newWindow = window.open("", '_blank');

    newWindow.document.write("<pre>" + output + "</pre>");
}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);
