document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('message');
  const send = document.getElementById('send');
  const output = document.getElementById('output');
  const chatWindow = document.getElementById('chat-window');

  function appendMessage(text, cls) {
    const p = document.createElement('p');
    p.textContent = text;
    if (cls) p.classList.add(cls);
    output.appendChild(p);
    // keep newest message visible
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    appendMessage(text, 'user');
    input.value = '';
    input.focus();
    // Example bot reply (replace with real logic / server call)
    setTimeout(() => appendMessage("Nice! You said: " + text, 'bot'), 300);
  }

  send.addEventListener('click', sendMessage);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
});
