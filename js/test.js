
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


  const lenis = new lenis({
    duration: 2222, // controls how slow the scroll is (higher = slower)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
    smooth: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // DOM MANIPULATION

});

const projectPane = document.querySelector('#projectpane');
const projectDetail = document.querySelector('.projectDetail');
const readMoreButtons = document.querySelectorAll('.card-button');
const goBackButton = document.querySelector('.goBackBtn');

const detailTitle = document.getElementById('detailTitle');
const detailDesc = document.getElementById('detailDesc');

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    detailTitle.textContent = button.dataset.title;
    detailDesc.textContent = button.dataset.desc;

    projectPane.classList.add('hidden');
    projectDetail.classList.remove('hidden');
  });
});
const card = document.querySelector('.tester');


goBackButton.addEventListener('click', () => {
  projectDetail.classList.add('hidden');
  projectPane.classList.remove('hidden');
});


