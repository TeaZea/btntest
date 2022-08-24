document.addEventListener('DOMContentLoaded', function () {

    let btnCorrect = document.querySelector('#correct');

    btnCorrect.addEventListener('click', (event) => {
        btnCorrect.style.backgroundColor = 'green';
        document.querySelector('#feedback1').innerHTML = 'Nice';
    });
});
