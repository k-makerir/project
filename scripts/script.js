const profileBtn = document.querySelector('.profile-btn');
const modal = document.querySelector('#loginModal');
const closeBtn = document.querySelector('.close-modal');

profileBtn.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.classList.remove('active');
    }
});