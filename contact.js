window.onload = () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && password && message) {

            setTimeout(() => {
                alert('Your message has been sent ✅');
            }, 1000);

            form.reset();

        } else {

            alert('Please fill out all field ❌');

        }
    });
};