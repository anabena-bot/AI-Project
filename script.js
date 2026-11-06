// A small, local interaction: no API calls, tracking, or user data.
const examples = {
  study: ['TRY THIS / STUDYING', 'Ask AI to explain a difficult concept, then generate practice questions. Compare the explanation with your course materials and answer without AI to check your understanding.'],
  create: ['TRY THIS / CREATING', 'Explore alternative colour palettes or sketch ideas with AI. Use them as starting points, then develop your own design and check the rights of any assets you use.'],
  work: ['TRY THIS / WORKING', 'Draft a routine email or organise a meeting agenda. Check names, dates, and tone yourself, and keep confidential information out of unapproved tools.']
};
document.querySelectorAll('[data-example]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-example]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    const [label, content] = examples[button.dataset.example];
    document.getElementById('example-label').textContent = label;
    document.getElementById('example-text').textContent = content;
  });
});
