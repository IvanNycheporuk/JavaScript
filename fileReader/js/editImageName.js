const editImageName = (e) => {
    let imageBlock = e.target.closest('figcaption');
    console.log(imageBlock)

    imageBlock.querySelector('._currentName').classList.add('hide');
    imageBlock.querySelector('._editName').classList.remove('hide');
}