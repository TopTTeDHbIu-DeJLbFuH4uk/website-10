// function open
document.getElementById('calculator-open').addEventListener('click', function () {
    document.getElementById('popup-calculator').classList.add('open');
});

// function close
// document.getElementById('close-modal-btn').addEventListener('click',function () {
//     document.getElementById('my-modal').classList.remove('open');
// });
document.getElementById('close-modal-btn').addEventListener('click', function () {
   document.getElementById('popup-calculator').classList.remove('open');
});