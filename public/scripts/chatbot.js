// Chatbot script

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const apiKey = 'enter your API key';

sendBtn.addEventListener('click', async () => {
  const userMessage = userInput.value;
  
  if (!userMessage) return;
  
  // Display user message in the chat
  appendMessage('You', userMessage);

  // Clear input
  userInput.value = '';

  try {
    // Fetch response from OpenAI API
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: userMessage,
        max_tokens: 100,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const botMessage = data.choices[0].text.trim();

    // Display bot response in the chat
    appendMessage('Bot', botMessage);

  } catch (error) {
    appendMessage('Error', 'Something went wrong. Please try again.');
  }
});

function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
