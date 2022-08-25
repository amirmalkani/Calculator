let screen = document.getElementById('screen');
let screenValue = "";
let buttons = document.querySelectorAll('button');
for (const item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*'
            screenValue += buttonText
            screen.value = screenValue
        }
        else if (buttonText == 'AC') {
            screen.value = ""
            screenValue = screen.value;
        }
        else if (buttonText == '=') {
            screen.value = eval(screen.value)
            screenValue = screen.value;
        }
        else if (buttonText == 'C') {
            let clear = "";
    for (let i = 0; i < screenValue.length - 1; i++) {

        clear += screenValue.charAt(i);
    }
    screenValue = clear;
    screen.value = screenValue;

           
        }
        else {
            screenValue += buttonText
            screen.value = screenValue
        }
    })
}

