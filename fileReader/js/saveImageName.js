const saveImageName = (e) => {
    let imageBlock = e.target.closest('li');    
    let inputValue = imageBlock.querySelector('input').value;
    let imageIndex = e.target.closest('li').dataset.index;

    images[imageIndex].name = inputValue;

    renderImages(imagesList, images);
    localStorage.setItem('images', JSON.stringify(images)); 
}