(function() {
    emailjs.init("user_q0FeObikRuZQcSir9zb1y");
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_jsrxotj','template_d58a8lk', '#contact-form', "user_q0FeObikRuZQcSir9zb1y")
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}