export default function positioning() {
        // check navbar height
        const navbarHeight = document.querySelector('.navbar').getBoundingClientRect().height;
        // select the content Div
        const content = document.querySelector('.container-fluid#general-container');
        
        // set main Div to be displayed under the navbar element as defauld
        content.style.marginTop = navbarHeight + "px";
        setTimeout(function() {
            console.log(navbarHeight)
        }, .2)
    
        // const anchor = document.getElementById('target-a');
        
        //     anchor.addEventListener('click', function(event) { 
        //         event.preventDefault();
        //         const scrollTargetPosition = document.querySelector(anchor.hash).offsetTop;
        //         window.scrollTo(0, scrollTargetPosition - navbarHeight);                
        //     })
        


    

    const anchorButtons = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
    anchorButtons.forEach((a) => {
        a.addEventListener('click', function(event) {
            event.preventDefault();

            // on mobile devices, virtually click on menu button to hide the navbar extended after click in some anchor element
            if(window.innerWidth <= 991) { // the width that bootstrap changes view to mobile
                setTimeout(function() {
                    const menuButton = document.querySelector('span.navbar-toggler-icon');
                    menuButton.click();
                }, 500)
            }

            // this trick scrolls the section to the correct top position because the navbar is position fixed and it get off the document's flow
            const scrollTargetPosition = document.querySelector(a.hash).offsetTop;
                window.scrollTo(0, scrollTargetPosition - navbarHeight);   
        })
    })
}