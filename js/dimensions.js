export default function dimensions() {
    const navbarHeight = document.querySelector('.navbar').getBoundingClientRect().height;
    const windowHeight = window.innerHeight;

    const condominioSection = document.querySelector('#condominio');
    const faqSection = document.querySelector('#faq');
    if(windowHeight >= 780) {
        condominioSection.style.height = windowHeight - navbarHeight + "px";
        faqSection.style.height = windowHeight - navbarHeight + "px";
    }
}
