let inpNeeds = document.querySelectorAll('.myBlue input')
let allInps = document.querySelectorAll('form input')
let btn = document.querySelector('.submit')
let form = document.forms.reg

let pattern = {
    name: /^[a-z ,.'-]+$/i,
    age: /^100|[1-9]?\d$/,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
    aboutYou: /^[A-z ,.'-]+$/, 
    html: /^[A-z ,.'-]+$/,
    css:    /^[a-z ,.'-]+$/,
    favouriteCar: /^[a-z ,.'-]+$/i,
    password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/,
    phone: /^998[012345789][0-9]{8}$/g,

}


function validate(regex, field) {
    if(regex.test(field.value)) {
        field.parentElement.classList.remove('invalid')
        field.parentElement.classList.add('valid')
    } else {
        field.parentElement.classList.remove('valid')
        field.parentElement.classList.add('invalid')
    }
}

allInps.forEach(inp => {
    inp.onkeyup = () => {

        validate(pattern[inp.name], inp)
    }
})


form.onsubmit = (event) => {
    event.preventDefault()
    let countErrs = 0

    inpNeeds.forEach(inp => {
        if(inp.value.length < 1 || inp.parentElement.classList.contains('invalid')) {
            inp.parentElement.classList.add('invalid')
            countErrs++
        } else {
            inp.parentElement.classList.remove('invalid')
        }
    });
console.log(countErrs);

    if(countErrs > 0) {
        console.log('Error')
    } else {
        submit(form)
    }
}


function submit(formElement) {
    let user = {}

    let fm = new FormData(formElement)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}

// const loaderContainer = document.querySelector('.loader-container');


btn.onclick = () => {
btn.style.backgroundColor = "black"
//   setTimeout ()
// window.addEventListener('load', () => {
//   // ...
// });
// window.addEventListener('load', () => {
//   loaderContainer.style.display = 'none';
//   window.addEventListener('load', () => {
//     loaderContainer.classList.add('loader-container-hidden');
// });
// });
}

















