const button = document.getElementById('button_arrow');
const password = document.getElementById('password');
const username = document.getElementById('username');

button.addEventListener('click', function() {
    if (password.value === '' || username.value === ''){
        alert('You need to fill everything in!')
    } else{
        alert('Completed! You will be redirected shortly.')
        setTimeout(4000);
        window.location.href = '/index.html';
    }
});
