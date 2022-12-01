/* Navbar */
const menuItemsList = document.querySelectorAll('.menuItem a');
const closeBtn = document.querySelector('.closeBtn img');
const menuIcon = document.querySelector('.menuIcon');
const coverDiv = document.querySelector('div');

for (let link of menuItemsList) {
    link.addEventListener('click', () => {
        closeBtn.click();
    });
}

menuIcon.addEventListener('click', showSidebar.bind(menuIcon, true));
closeBtn.addEventListener('click', showSidebar.bind(menuIcon, false));

function showSidebar(flag, e) {
    if (e.type === 'click') {
        window.addEventListener('resize', showSidebar.bind(menuIcon, flag));
    }
    if ((e.type === 'click' && flag) ||
        (e.type === 'resize' && !flag && document.documentElement.clientWidth > 949) ||
        (e.type === 'resize' && flag) ||
        (document.documentElement.clientWidth >= 949)) {
        this.previousElementSibling.style.display = "initial";
    }

    else {
        this.previousElementSibling.style.display = "none";
    }

    if ((e.type === 'click' && flag) ||
        (e.type === 'resize' && flag && document.documentElement.clientWidth <= 949)) {
        coverDiv.classList.add('cover');
    }
    else {
        coverDiv.classList.remove('cover');
    }
}

/* Welcome and Images Section */
const welcomeSection = document.querySelector('#welcome');
const imagesSectionFlexItems = document.querySelectorAll('#images .flexItem');
for (let flexItem of imagesSectionFlexItems) {
    flexItem.style.backgroundImage = `url(Images/Services/${flexItem.querySelector('p').innerText}1.jpg)`;
}

let welcomeImageNum = 2;
let imagesSectionImageNum = 2;
window.addEventListener('load', () => {
    setInterval(() => {
        welcomeSection.style.backgroundImage = `url(Images/Welcome/welcome${welcomeImageNum}.jpg)`;
        welcomeImageNum++;
        if (welcomeImageNum === 4) {
            welcomeImageNum = 1;
        }
        for (let flexItem of imagesSectionFlexItems) {
            flexItem.style.backgroundImage = `url(Images/Services/${flexItem.querySelector('p').innerText}${imagesSectionImageNum}.jpg)`;
        }
        imagesSectionImageNum = imagesSectionImageNum === 2 ? 1 : 2;
    }, 5000);
});

/* Set the current year in footer */
let year = document.querySelector('footer span');
year.textContent = new Date().getFullYear();
