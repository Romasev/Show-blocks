window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // declare variables
    let blocks = document.querySelector('.blocks'),
        question = document.querySelectorAll('.question'),
        text = document.querySelectorAll('.text');

    // adding all .text class hide to hide
    function blocksHide() {
        for (let i = 0; i < text.length; i++) {
            text[i].classList.add('hide');
        }
    };
    blocksHide();

    // a function that hides the text if it is visible. And shows if it's hidden.
    function actAdd(n) {
        if (text[n].classList.contains('hide')) {
            text[n].classList.remove('hide');
            text[n].classList.add('block');
        } else {
            text[n].classList.remove('block');
            text[n].classList.add('hide');
        }
    };

    // Catch the mouse click event .question
    blocks.addEventListener('click', function(event) {
        let target = event.target;

        if (target && target.classList.contains('question')) {

            // With the help of a cycle, check which question you clicked(i), run the function on the corresponding text number (i).
            for (let i = 0; i < question.length; i++) {
                if (target == question[i]) {
                    actAdd(i);
                    console.log('Success!');
                    break;
                }
            }
        }
    });
});
