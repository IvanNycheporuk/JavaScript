const removeImage = (e) => {
    let imageIndex = +e.target.closest('li').dataset.index;

    images = images.filter((image, i) => {
        return i !== imageIndex;
    });

    renderImages(imagesList, images);
    localStorage.setItem('images', JSON.stringify(images));   
}