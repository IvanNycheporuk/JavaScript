const renderImages = (elem ,arr) => {
    let images = arr.map((image, index) => {
        return `
            <li data-index="${index}">
                <figure>
                    <img class="basic-image" src="${image.url}">
                    <figcaption>
                        <div>
                            <div class="descrition _currentName">
                                <p>${image.name}</p>
                                <button class="_editNameBtn">&#9998;</button>
                            </div>
                            <div class="descrition _editName hide">
                                <input type="text" value="${image.name}"/>
                                <button class="_saveNameBtn">&#10004;</button>
                            </div>
                        </div>                        
                        <p>Size: ${image.size}kb</p>
                    </figcaption>
                </figure>
                <button class="removeButton" data-index=${index}>Remove</button>
            </li>
        `
    })    
    elem.innerHTML = `
        <ul class="images">${images}</uk>
    `
}