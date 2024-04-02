function checkEvenOdd() {
    const number = document.getElementById('number').value;
    const result = number % 2 === 0 ? 'is an even number.' : 'is an odd number.';
    document.getElementById('result').textContent = number + ' ' + result;
}
