// Generate Random 4 digit Pin
document.getElementById('pin-generator').addEventListener('click', function () {
    const randomNumber = 999 + parseInt(Math.random() * 9000);
    document.getElementById('show-generated').value = randomNumber;
    document.getElementById('pin-matched').style.display = 'none';
    document.getElementById('pin-not-matched').style.display = 'none';
    if (document.getElementById('trial-notify').innerText.includes('3') != true) {
        document.getElementById('submit-button').removeAttribute("disabled", true);
        location.reload();
    }
});

// User Input Function
document.getElementById('key-pad').addEventListener('click', function (event) {
    const myInput = event.target.innerText;
    let showInput = document.getElementById('show-input');
    if (isNaN(myInput)) {
        if (myInput == 'C') {
            showInput.value = '';
        } else if (myInput == '<') {
            const previousNumber = showInput.value;
            showInput.value = previousNumber.substring(0, previousNumber.length - 1);
        }
    } else {
        const previousNumber = showInput.value;
        showInput.value = previousNumber + myInput;
    }
});

// Check submitted pin with randomly generated pin
document.getElementById('submit-button').addEventListener('click', function () {
    const submittedPin = document.getElementById('show-input');
    const generatedPin = document.getElementById('show-generated');
    if (submittedPin.value == generatedPin.value) {
        generatedPin.value = '';
        submittedPin.value = '';
        document.getElementById('pin-matched').style.display = 'block';
        document.getElementById('pin-not-matched').style.display = 'none';
    } else {
        submittedPin.value = '';
        document.getElementById('pin-not-matched').style.display = 'block';
        document.getElementById('pin-matched').style.display = 'none';
        document.getElementById('try-left').innerText = parseInt(document.getElementById('try-left').innerText) - 1;
        if (document.getElementById('try-left').innerText < 0) {
            document.getElementById('trial-notify').innerText = 'You entered many wrong pin. Please, try to generate pin again';
            document.getElementById('submit-button').setAttribute("disabled", false);
        }
    }
});