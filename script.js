const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-links');
hamburger.addEventListener('click', function() {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active'); 
});

const form = document.querySelector('#contact form');
const thankYouMessage = document.querySelector('.thank-you-message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.querySelector('#contact input[type="text"]').value;
    thankYouMessage.textContent = 'Thank you, ' + name + '! Your message was sent.';
    thankYouMessage.classList.add('show');
    form.reset();
    
    setTimeout(function() {
        thankYouMessage.classList.remove('show');
    }, 3000);
});

