let jaden = getElementById(heading-container)textContent="Jadihen";
const sendBtn = document.getElementById('send');
const messageInput = document.getElementById('message');
const output = document.getElementById('output');

sendBtn.addEventListener('click', () => {
    if (messageInput.value.trim() !== "") {
        const newMessage = document.createElement('p');
        newMessage.innerText = messageInput.value;
        output.appendChild(newMessage);
        messageInput.value = ""; // Clear input
        output.parentElement.scrollTop = output.parentElement.scrollHeight; // Auto-scroll
    }
});


