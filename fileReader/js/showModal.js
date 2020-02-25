const showModal = (imgLink) => {
    modal.classList.remove('hide');

    modal.querySelector('img').src = imgLink;
}