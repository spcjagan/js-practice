function inputMethod() {
    var x = document.getElementById("userName").value;
    console.log(x);

}
function logName() {
    var textBoxValue = document.getElementById("userName").value;
    if (!textBoxValue) {
        alert('enter something')
        return;
    } 
    console.log(textBoxValue);
    console.log('Sum of 2,3 :', sum(2,3))
}

function blurMetho() {
    console.log('Blur method')
}

