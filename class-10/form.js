function submitForm(event) {

    event.preventDefault();

    let rName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let gender= document.querySelector('input[name="gender"]:checked');
    let dob= document.getElementById('dob').value;
    let course= document.getElementById('course').value;
    let address= document.getElementById('address').value;
    let hobby=document.querySelectorAll('input[name="hobby"]:checked');


    let hobbyValue=[];

    for(let index=0; index<hobby.length;index++){

        hobbyValue.push(hobby[index].value);

    }
    // another way in hooby
    // hobby.forEach(
    //     function(hobby){

    //         hobbyValue.push(hobby.value); 
    //     }
    // );


    // start validation
        // name field validation
        if(rName==''){
            alert("Name can not be empty.");
            return;
        }
        else if(rName.length<=3){
            alert("Name must have at least 4 character.");
            return;
        }

        // email field validation
        const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(regEx.test(email)){

        }
        else{
            alert("This is not a valid email address. Please enter a valid email address.😊");
            return;
        }

        // password field validation
        if(password.length<7 || password.length>=20){
            alert("You have to submit minimum 8 and maximum 20 character in password.");
            return;
        }

        // gender field validation
        if(gender==null){
            alert("Please submit the gender.");
            return;
        }
        
        // hobby field validation
        if(hobby.length==0){
            alert("Select at least one hobby.");
            return;
        }

        // course field validation
        if(course=="Choose..."){
            alert("Which course you want to do please select any one.");
            return;
        }

        // dob field validation
        if(dob==""){
            alert("Give your date of birth.");
            return;
        }

        // address field validation
        if(address==""){
            alert("You have to submit your address.");
            return;
        }
    // end validation

    let output = "Name: " + rName + "\n";

    output += "Email: " + email + "\n";

    output += "Password: " + password + "\n";
    output += "Gender: " +gender.value + "\n";
    output += "DOB: " +dob + "\n";
    output += "Course: " +course + "\n";
    output += "Hobby: " +hobbyValue + "\n";
    output += "Address: " +address + "\n";

    let newWindow = window.open("", '_blank');

    newWindow.document.write("<pre>" + output + "</pre>");
}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);