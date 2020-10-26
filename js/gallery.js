function gallery(){
    let galleryBigPhoto = document.querySelector('#gallery-big-photo');
    let galleryCarouselItms = document.querySelectorAll('.card-main__product-section__gallery__carousel__itm');

    galleryCarouselItms.forEach(galleryCarouselItm => {
        galleryCarouselItm.addEventListener( 'click', event => {
            let bigPhotoUrl = event.target.nextSibling.nextSibling.innerHTML;
            galleryBigPhoto.src = bigPhotoUrl;
        })
    })
}