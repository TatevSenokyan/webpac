import "./styles/index.css";

const validateEmail = (email) => {
    return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.
       test(email);
};


const checkValidation = () => {
    const result = new FormData(form);
    let valid = false;
    ["name", "email", "subject", "content"].forEach((field)=>{
       if (!result.get(field)) {
           document.querySelector('.'+field).classList.add('error');
       } else {
           document.querySelector('.'+field).classList.remove('error');
           if (field === "email") {
               if (validateEmail(result.get(field))) {
                   document.querySelector('.'+field).classList.remove('errorEmail');
                   valid = true;
               } else {
                   document.querySelector('.'+field).classList.add('errorEmail');
               }
           }      
       }
    })
    return valid;
}

form.onsubmit = (e) => {
    if (checkValidation()) {
        alert(`Dear ${new FormData(form).get("name").toUpperCase()}, \n your submission successfully accepted.`);
    } else {
        e.preventDefault();
    }
}