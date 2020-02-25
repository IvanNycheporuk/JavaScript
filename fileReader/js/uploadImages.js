const uploader = document.getElementById('uploader');
const imagesList = document.getElementById('images-list');
const modal = document.querySelector('.modal');
let images = JSON.parse(localStorage.getItem('images')) || [];

function uploadImage() {
    let files = this.files, 
        image, 
        i, 
        fileLength = files.length;

    if (FileReader) {
        for(i = 0; i < fileLength; i += 1) {
            let fileReader = new FileReader(), 
                file = files[i];
                console.log(file);
            fileReader.addEventListener('load', event => {
                image = {};
                image['name'] = file.name;
                image['size'] = file.size;
                image['url'] = event.target.result;

                images.push(image);

                renderImages(imagesList, images);
                localStorage.setItem('images', JSON.stringify(images));                  
            });
            fileReader.readAsDataURL(file);
        }
    }    
}

uploader.addEventListener('change', uploadImage);

imagesList.addEventListener('click', (e) => {
    if (e.target.matches('.removeButton')) {
        removeImage(e);
    }

    if (e.target.matches('.basic-image')) {
        showModal(e.target.src);
    }

    if (e.target.matches('._editNameBtn')) {
        editImageName(e);
    }

    if (e.target.matches('._saveNameBtn')) {
        saveImageName(e);
    }
})

modal.addEventListener('click', hideModal)

renderImages(imagesList ,images);