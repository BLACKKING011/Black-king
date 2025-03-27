// Mobile menu toggle
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

// Newsletter form submission
document.querySelector('.newsletter form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("You have subscribed successfully!");
});
