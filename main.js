
const logo = document.querySelectorAll('.logo');
const button_mode = document.querySelector('#buttonMode');

document.documentElement.setAttribute('data-theme', localStorage.getItem("mode"));

if (document.documentElement.getAttribute('data-theme') == 'dark') {
    button_mode.children[1].style.display = 'block';
    button_mode.children[0].style.display = 'none';

    logo.forEach(l => {
        l.style.filter="invert(1)";
    });
} else {
    button_mode.children[0].style.display = 'block';
    button_mode.children[1].style.display = 'none';

    logo.forEach(l => {
        l.style.filter="invert(0)";
    });
}

button_mode.addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-theme') == 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        button_mode.children[0].style.display = 'block';
        button_mode.children[1].style.display = 'none';

        logo.forEach(l => {
            l.style.filter="invert(0)";
        });
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        button_mode.children[1].style.display = 'block';
        button_mode.children[0].style.display = 'none';

        logo.forEach(l => {
            l.style.filter="invert(1)";
        });
    }
    localStorage.setItem("mode", document.documentElement.getAttribute('data-theme'));
});







const current_year = document.querySelectorAll('.currentYear');

current_year.forEach(year => {
    year.innerText = new Date().getFullYear();
});
