const translatorForm = document.getElementById('translator-form');
const translateInput = document.getElementById('translate-input');
const languageSelect = document.getElementById('language');
const translationResult = document.getElementById('translation-result');

translatorForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const inputText = translateInput.value;
  const targetLanguage = languageSelect.value;

  try {
    const res = await fetch('/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: inputText, language: targetLanguage })
    });

    const data = await res.json();
    translationResult.innerHTML = `<p>Translated Text: ${data.translation}</p>`;
  } catch (error) {
    console.error('Error translating text:', error);
    translationResult.innerHTML = `<p>Error translating text. Please try again.</p>`;
  }
});
