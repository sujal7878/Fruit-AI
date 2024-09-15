const addFaqForm = document.getElementById('add-faq-form');
const faqList = document.getElementById('faq-list');

// Fetch FAQs on page load
document.addEventListener('DOMContentLoaded', async () => {
  await fetchFaqs();
});

// Fetch and display FAQs
async function fetchFaqs() {
  try {
    const res = await fetch('/faqs');
    const faqs = await res.json();

    faqList.innerHTML = '';
    faqs.forEach(faq => {
      faqList.innerHTML += `
        <div class="faq-item" data-id="${faq._id}">
          <h3>${faq.fruit}</h3>
          <p><strong>Q:</strong> ${faq.question}</p>
          <p><strong>A:</strong> ${faq.answer}</p>
          <button onclick="editFaq('${faq._id}')">Edit</button>
          <button onclick="deleteFaq('${faq._id}')">Delete</button>
        </div>
      `;
    });
  } catch (error) {
    console.error('Error fetching FAQs:', error);
  }
}

// Add new FAQ
addFaqForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const fruit = document.getElementById('fruit').value;
  const question = document.getElementById('faq-question').value;
  const answer = document.getElementById('faq-answer').value;

  try {
    const res = await fetch('/faqs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fruit, question, answer })
    });

    const newFaq = await res.json();
    faqList.innerHTML += `
      <div class="faq-item" data-id="${newFaq._id}">
        <h3>${newFaq.fruit}</h3>
        <p><strong>Q:</strong> ${newFaq.question}</p>
        <p><strong>A:</strong> ${newFaq.answer}</p>
        <button onclick="editFaq('${newFaq._id}')">Edit</button>
        <button onclick="deleteFaq('${newFaq._id}')">Delete</button>
      </div>
    `;

    addFaqForm.reset();
  } catch (error) {
    console.error('Error adding FAQ:', error);
  }
});

// Edit FAQ
async function editFaq(id) {
  const faqItem = document.querySelector(`.faq-item[data-id="${id}"]`);
  const fruit = prompt('Edit fruit name:', faqItem.querySelector('h3').textContent);
  const question = prompt('Edit question:', faqItem.querySelector('p strong').nextSibling.textContent);
  const answer = prompt('Edit answer:', faqItem.querySelectorAll('p')[1].textContent.split(': ')[1]);

  if (fruit && question && answer) {
    try {
      await fetch(`/faqs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fruit, question, answer })
      });

      await fetchFaqs(); // Refresh FAQ list after edit
    } catch (error) {
      console.error('Error editing FAQ:', error);
    }
  }
}

// Delete FAQ
async function deleteFaq(id) {
  if (confirm('Are you sure you want to delete this FAQ?')) {
    try {
      await fetch(`/faqs/${id}`, {
        method: 'DELETE'
      });

      await fetchFaqs(); // Refresh FAQ list after deletion
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  }
}
