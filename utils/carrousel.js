const carrousel = document.querySelector("#carrousel");

const data = { 
    carrouselImages: [ 
        "public/images/guayaba.webp",
        "public/images/limon.webp", 
        "public/images/aguacate.webp", 
        "public/images/mango.webp", 
        "public/images/mango-2.webp", 
        "public/images/maracuya.webp", 
    ]
}

let indexCarrousel = 0; 
let imagesContainer; 
let direction = 1; 

const moveSlide = () => { 
    const maxIndex = imagesContainer.children.length - 3; 
    let counter = 0; 

    if(indexCarrousel <= 0) { 
        direction = 1; 
    }

    if(indexCarrousel == maxIndex) { 
        direction *= -1; 
    }

    counter += 1;
    indexCarrousel += direction;
    const slideWidth = imagesContainer.children[0].offsetWidth + 16;
    imagesContainer.style.transform = `translateX(-${indexCarrousel * slideWidth}px)`
}

const generateStructureCarrousel = () => { 
    imagesContainer = document.createElement("div"); 
    imagesContainer.classList.add("images-container"); 

    data.carrouselImages.forEach((image, index) => {
        imagesContainer.appendChild(generateSlide(image, index + 1));
    });

    carrousel.appendChild(imagesContainer);
}


const generateSlide = (data, id) => { 
    let element = document.createElement("img"); 
    let slide = document.createElement("div"); 

    slide.classList.add("slide"); 
    slide.id = `${id}`

    element.src = data; 
    slide.appendChild(element); 

    return slide; 
}

const generateCarrousel =() => { 
    generateStructureCarrousel(); 
    setInterval(moveSlide, 2000); 
}


generateCarrousel(); 