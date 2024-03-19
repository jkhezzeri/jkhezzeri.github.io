


const current_year = document.querySelectorAll('.currentYear');

current_year.forEach(year => {
    year.innerText = new Date().getFullYear();
});
