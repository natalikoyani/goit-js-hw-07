import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
    .map(galleryItem => `<li class="gallery__item">
        <a class="gallery__link" href=${galleryItem.original}>
            <img
                class="gallery__image"
                src=${galleryItem.preview}
                data-source=${galleryItem.original}
                alt=${galleryItem.description}
            />
        </a>
    </li>`)
    .join('');

gallery.innerHTML = galleryMarkup;

gallery.addEventListener('click', imgClickHandler);

function imgClickHandler(e) {
    e.preventDefault();

    if (e.target.nodeName === "UL") {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${e.target.dataset.source}">`,
        {
            onShow: (instance) => window.addEventListener('keydown', closeModalHandler),
            onClose: (instance) => window.removeEventListener('keydown', closeModalHandler),
        }
    );

    instance.show();

    function closeModalHandler(e) {
        if (e.code === "Escape") {
            instance.close();
        }
    }
}



