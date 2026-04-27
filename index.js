const myform = document.getElementById('myform');
const message = document.getElementById('message');
const btn1 = document.getElementById('btn1');

myform.addEventListener('submit', (e) => {
    e.preventDefault();

    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // 1. Validation Check First
    if (!fname || !lname || !email || !password) {
        alert('Please fill out all fields ❌');
        return;
    }

    // 2. Success Message Styling
    message.style.display = 'block';
    message.style.backgroundColor = 'darkgreen';
    message.style.color = 'white';
    message.style.padding = '30px';
    message.style.position = 'absolute';
    message.style.top = '100px';
    message.style.left = '50%'; // Centered accurately
    message.style.transform = 'translateX(-50%)';
    message.style.width = '40vw';
    message.style.position ='fixed';
    message.style.borderRadius ='5px';

    // 3. Close Button Styling & Text
    btn1.style.display = 'block';
    btn1.style.margin = '20px auto 0'; // Centers button in the div
    btn1.style.backgroundColor = 'red';
    btn1.style.color = 'white';
    btn1.style.border = 'none';
    btn1.style.borderRadius = '5px';
    btn1.style.cursor = 'pointer';
    btn1.innerText = 'Close';
    btn1.style.padding ='10px 10px'

    // 4. Update Content
    message.innerHTML = `
        <p>Thank you for your information 🤝!!</p>
        <p>1. First name: ${fname} ✅</p>
        <p>2. Last name: ${lname} ✅</p>
        <p>3. Email: ${email} ✅</p>
        <p>4. Password: ${password} ✅</p>
    `;
    
    // Append the button back inside the message if it's not already
    message.appendChild(btn1);

    myform.reset();
});

// 5. Close Button Logic
btn1.addEventListener('click', () => {
    btn1.innerHTML =`
    <div class='card'><a href='./index.html'><button>Switch Next✨</a></button>
    `;
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    // Example: create a child element and append it
    const child = document.createElement('div');
    child.textContent = 'Form is loading ⏳ ...';
    container.appendChild(child);

    // Show alert once after 1 second
    setTimeout(() => {
        alert('Opening form...');
    }, 1000);
});

