const button = document.getElementById('right');
const btns = document.querySelectorAll('.btn');
const question = document.getElementById('questionID');

button.addEventListener('click', function () {
    // Set the 'correct' class button to green
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
    question.textContent = "Correct";

    btns.forEach(btn => {
        if (btn !== button) {
            btn.style.backgroundColor = ''; 
            btn.style.color = '';
        }
    });
});

btns.forEach(btn => {
    btn.addEventListener('click', function () {
        btn.style.backgroundColor = '#900020';
        btn.style.color = 'white';
        question.textContent = "Wrong";

        btns.forEach(otherBtn => {
            if (otherBtn !== btn) {
                otherBtn.style.backgroundColor = ''; 
                otherBtn.style.color = ''; 
            }
        });
        button.style.backgroundColor = '';
        button.style.color = '';
    });
});
