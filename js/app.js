window.addEventListener("DOMContentLoaded", (event) => {

    // sticky nav
    event.preventDefault();
    const stickyNav = document.querySelector(".header-nav");    
    window.addEventListener('scroll', function() {
        if (pageYOffset > 0){
            stickyNav.classList.add("header-nav_sticky");
        }
        else{
            stickyNav.classList.remove("header-nav_sticky");
        }
    })
        // smooth animation of anchor
        document.querySelectorAll('a[href^="#"').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
        
                let href = this.getAttribute('href').substring(1);
        
                const scrollTarget = document.getElementById(href);
        
                
                const elementPosition = scrollTarget.getBoundingClientRect().top;
                
                if (document.querySelector(".header-nav__icon").classList.contains("header-nav__icon_a")){
                    document.querySelector(".header-nav__icon").classList.toggle("header-nav__icon_a");
                    document.querySelector(".header-nav-menu").classList.toggle("header-nav-menu_active");
                    document.querySelector("html").classList.toggle("_lock")
                }
                
                window.scrollBy({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            });
        });

        // burger for mobile device
        document.querySelector(".header-nav__icon").addEventListener("click", (event) => {
            event.preventDefault();
            
            const navMenu = document.querySelector(".header-nav-menu");
            const icon = document.querySelector(".header-nav__icon");
            icon.classList.toggle("header-nav__icon_a");
            navMenu.classList.toggle("header-nav-menu_active");
            document.querySelector("html").classList.toggle("_lock");
            
        });
        
        // slider with content
        const data = [{
            src: "img/portfolioImg/first.png",
            description: "Static website on HTML."
        },{
            src: "img/portfolioImg/second.png",
            description: "Small quiz about Python on JavaScript."
        }];
        
        const arrows = document.querySelectorAll(".portfolio-header__arrow");
        const content = document.querySelector(".portfolio-header__works");
        const count1 = document.querySelector("#count1");
        const count2 = document.querySelector("#count2");
        const description = document.querySelector(".portfolio-header__description");
        count2.textContent = data.length;
        let index = 0;
        createElement();
        
        count1.textContent = index + 1;
        description.textContent = data[index - 1].description;
        arrows.forEach((item) => 
            item.addEventListener("click",(event) => {
                let direction = event.target.id;
        
                if (direction == "arrow-left"){
                        
                    if (index == 0){
                        index = data.length;
                    }
                    index = --index % data.length;
                    createElement();
                    count1.textContent = index + 1;
                    description.textContent = data[index].description;
        
                    
                }
                else{
                    index = ++index % data.length;
                    createElement();
                    count1.textContent = index + 1;
                    description.textContent = data[index].description;
                }
            }));
        
        
        function createElement(){
            Object.assign(content.style, {
                background: `url(${data[index].src})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                maxHeight: "500px",
                margin: "0 auto",
                transition: "1s",
                borderRadius: "20px",
            })
            }
        // popup
        const formButton = document.querySelector(".footer-formBtn");
        const modal = document.querySelector(".popup")
        formButton.addEventListener("click", (event) => {
            event.preventDefault();
            modal.classList.toggle("show");
            modal.classList.toggle("hide");
            document.querySelector("html").classList.toggle("_lock")
    
        });
        const modalClose = document.querySelector(".popup");
        const popupCont = document.querySelector(".popup__content");
        
        const closeBtn = document.querySelector(".popup__close");
        modalClose.addEventListener("click", (event) => {
            event.preventDefault();
            if (!popupCont.contains(event.target) || event.target === closeBtn){
                modal.classList.toggle("show");
                modal.classList.toggle("hide");
                document.querySelector("html").classList.toggle("_lock")
            }
            
            
        })

})
