
const button_lang = document.querySelector('#buttonLang');
const lang_list = document.querySelector('#langList');
const langs = Array.from(lang_list.children);
const text_en = document.querySelectorAll('.textEN');
const text_fr = document.querySelectorAll('.textFR');

const logo = document.querySelectorAll('.logo');
const button_mode = document.querySelector('#buttonMode');

const current_year = document.querySelectorAll('.currentYear');

document.documentElement.setAttribute('data-lang', localStorage.getItem("lang"));
document.documentElement.setAttribute('data-mode', localStorage.getItem("mode"));

function setLang() {
    if (document.documentElement.getAttribute('data-lang') == 'fr') {
        langs[0].classList.remove('selected');
        langs[1].classList.add('selected');
        text_fr.forEach(fr => {
            fr.style.display = 'flex';
        });
        text_en.forEach(en => {
            en.style.display = 'none';
        });
    } else {
        langs[0].classList.add('selected');
        langs[1].classList.remove('selected');
        text_en.forEach(en => {
            en.style.display = 'flex';
        });
        text_fr.forEach(fr => {
            fr.style.display = 'none';
        });
    }
}

function setMode() {
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
}

setLang();
setMode();



window.addEventListener('click', function(e){
	if (button_lang.contains(e.target)){
        if (lang_list.style.display == 'flex') {
            lang_list.style.display = 'none';
        } else {
            lang_list.style.display = 'flex';
        }
    }
    else {
        lang_list.style.display = 'none';
    }
});

langs.forEach(lang => {
    lang.addEventListener('click',()=>{
        langs.forEach(l => {
            l.classList.remove('selected');
        });
        lang.classList.add('selected');
        document.documentElement.setAttribute('data-lang', lang.innerHTML);
        localStorage.setItem("lang", document.documentElement.getAttribute('data-lang'));
        setLang();
    });
});



button_mode.addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-mode') == 'dark') {
        document.documentElement.setAttribute('data-mode', 'light');
    }
    else {
        document.documentElement.setAttribute('data-mode', 'dark');
    }
    localStorage.setItem("mode", document.documentElement.getAttribute('data-mode'));
    setMode();
});



current_year.forEach(year => {
    year.innerText = new Date().getFullYear();
});
