let firstName = document.querySelector('.f-name');
let secondName = document.querySelector('.s-name');
let btn = document.querySelector('.submit');
let output = document.querySelector('.output');

btn.addEventListener('click', ((e) => {
    e.preventDefault();
    if(firstName.value === "" && secondName.value===""){
        output.textContent = "input field is empty"
    }
    if (firstName.value != "" && secondName.value != "") {
       output.textContent = `${firstName.value} & ${secondName.value} : ${randomNum()}% Love`
    };
    firstName.value = "";
    secondName.value = "";
}))

// random number function
function randomNum (){
    return Math.floor(Math.random() * 101);
}

