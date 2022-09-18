const inputFields = document.querySelectorAll('input');

for(let i = 0; i < inputFields.length; i++) {
    let field = inputFields[i];
    field.addEventListener('input', (e) => {
        if(e.target.value != "") {
            e.target.parentNode.classList.add('animation');
        } else if(e.target.value == "") {
            e.target.parentNode.classList.remove('animation');
        }
    })
}