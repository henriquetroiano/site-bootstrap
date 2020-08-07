export default function dimensions() {
    const navbarHeight = document.querySelector('.navbar').getBoundingClientRect().height;
    const windowHeight = window.innerHeight;

    const condominioSection = document.querySelector('#condominio');
    if(windowHeight >= 780) {
        condominioSection.style.height = windowHeight - navbarHeight + "px";
    }
}
