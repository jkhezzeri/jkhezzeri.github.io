
const logo = document.querySelectorAll('.logo');
const button_lang = document.querySelector('#buttonLang');
const lang_list = document.querySelector('#langList');
const button_mode = document.querySelector('#buttonMode');

document.documentElement.setAttribute('data-lang', localStorage.getItem("lang"));
document.documentElement.setAttribute('data-mode', localStorage.getItem("mode"));

window.addEventListener('click', function(e){
	if (button_lang.contains(e.target)){
        lang_list.style.display = 'flex';
    }
    else {
        lang_list.style.display = 'none';
    }
});

const langs = Array.from(lang_list.children);

langs.forEach(lang => {
    lang.addEventListener('click',()=>{
        langs.forEach(l => {
            l.classList.remove('selected');
        });
        lang.classList.add('selected');
        document.documentElement.setAttribute('data-lang', lang.innerHTML);
        localStorage.setItem("lang", document.documentElement.getAttribute('data-lang'));
    });
});


if (document.documentElement.getAttribute('data-lang') == 'fr') {

    langs[0].classList.remove('selected');
    langs[1].classList.add('selected');

} else {

    langs[0].classList.add('selected');
    langs[1].classList.remove('selected');

}



if (document.documentElement.getAttribute('data-mode') == 'dark') {
    button_mode.children[0].style.display = 'none';
    button_mode.children[1].style.display = 'block';

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
    if (document.documentElement.getAttribute('data-mode') == 'dark') {
        document.documentElement.setAttribute('data-mode', 'light');
        button_mode.children[0].style.display = 'block';
        button_mode.children[1].style.display = 'none';

        logo.forEach(l => {
            l.style.filter="invert(0)";
        });
    }
    else {
        document.documentElement.setAttribute('data-mode', 'dark');
        button_mode.children[1].style.display = 'block';
        button_mode.children[0].style.display = 'none';

        logo.forEach(l => {
            l.style.filter="invert(1)";
        });
    }
    localStorage.setItem("mode", document.documentElement.getAttribute('data-mode'));
});







const current_year = document.querySelectorAll('.currentYear');

current_year.forEach(year => {
    year.innerText = new Date().getFullYear();
});
