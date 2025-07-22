
// code for sorting
function filterCards(category) {
  const container = document.getElementById('card-Container');
  const cards = Array.from(container.getElementsByClassName('card-box'));

  // If "all" selected, show all and reset order
  if (category === 'all') {
    cards.forEach(card => {
      card.style.order = 0;
      card.style.display = '';
    });
    return;
  }

  // Sort: matching cards go to top
  cards.forEach(card => {
    const isMatch = card.dataset.category === category;
    card.style.order = isMatch ? -1 : 1;  // negative order pushes to top
    card.style.display = ''; // always show; change to 'none' to hide mismatches
  });

  // Optional: To hide non-matching cards instead of reordering:

  cards.forEach(card => {
    card.style.display = (card.dataset.category === category) ? '' : 'none';
  });

}
// animation's pane for projects pane cards
function setActive(btn) {
  document.querySelectorAll('.bt-p').forEach(ab => ab.classList.remove('active'));
  btn.classList.add('active');
}

const pobj = document.querySelectorAll('.filter-buttons');
const pobj1 = document.querySelectorAll('.card-box');
const pobj2 = document.querySelectorAll('#ab-sd-tx-htg');

const p = new IntersectionObserver(entries => {
  entries.forEach(entries => {
    if (entries.isIntersecting) {
      entries.target.classList.add('show');
    }
  });
}, { threshold: 0.5 });

pobj.forEach(button => p.observe(button));
pobj1.forEach(card => p.observe(card));
pobj2.forEach(card => p.observe(card));


// Parse URL parameter for ?filter=category
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('filter');

    if (category) {
        // Trigger the filter based on URL
        filterCards(category);

        // Also highlight the matching button
        const matchingBtn = document.querySelector(`.bt-p[data-category="${category}"]`);
        if (matchingBtn) {
            setActive(matchingBtn);
        }
    }
});

  window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('card-Container');
    const cards = Array.from(container.getElementsByClassName('card-box'));

    // Shuffle the cards array using Fisher-Yates algorithm
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    // Clear the container and append the shuffled cards
    container.innerHTML = '';
    cards.forEach(card => container.appendChild(card));
  });

    



