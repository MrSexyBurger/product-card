function relatedCarousel (){
    let backBtn = document.querySelector('#related-btn-back');
    let forwardBtn = document.querySelector('#related-btn-forward');
    let carousel = document.querySelector('.card-main__related-section__corousel__body');
    let products = document.querySelectorAll('.card-main__related-section__corousel__body__itm');
    let scrollDots = document.querySelectorAll('.card-main__related-section__corousel__progress__itm');

    let carouselWidth, scroll, scrollProcent, scrollProgress, scrollDistance = 200;

    carousel.addEventListener('scroll', () =>{
        scroll = carousel.scrollLeft;
        carouselWidth = carousel.getBoundingClientRect().width;
        scrollProcent = (carousel.scrollWidth - carouselWidth)/100;
        scrollProgress = scroll/scrollProcent;

        if (scroll == 0) makeForwardBtnActive();
        else if (scroll >= carousel.scrollWidth - carouselWidth) makeBackBtnActive();

        removeScrollDotsActive(scrollDots);

        if(scrollProgress > 66) {
            makeScrollDotActive(scrollDots, 3);
        } else if (scrollProgress > 33 ){
            makeScrollDotActive(scrollDots, 2);
        } else {
            makeScrollDotActive(scrollDots, 1);
        }

    });

    forwardBtn.addEventListener('click', () => {
        scrollForward(scrollDistance);
    })

    backBtn.addEventListener('click', () => {
        scrollBackwards(scrollDistance);
    })

    const makeForwardBtnActive = () => {
        removeBtnActive();
        forwardBtn.classList.add('active');
    }

    const makeBackBtnActive = () => {
        removeBtnActive();
        backBtn.classList.add('active');
    }

    const removeBtnActive = () => {
        forwardBtn.classList.remove('active');
        backBtn.classList.remove('active');
    }

    const scrollForward = (scrollDistance) => {
        carousel.scrollBy({left: scrollDistance, behavior: 'smooth'});
    }

    const scrollBackwards = (scrollDistance) => {
        carousel.scrollBy({left: -scrollDistance, behavior: 'smooth'});
    }

    const removeScrollDotsActive = (scrollDots) => {
        scrollDots.forEach(scrollDot => scrollDot.classList.remove('active'));
    }

    const makeScrollDotActive = (scrollDots, number) => {
        scrollDots.forEach( (scrollDot, index) => {if(index + 1 == number) scrollDot.classList.add('active')});
    }
}