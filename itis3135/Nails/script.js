document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('imageContainer');
    const images = [
        { src: 'images/nail1.png', alt: 'nail1' },
        { src: 'images/nail2.png', alt: 'nail2' },
        { src: 'images/nail3.png', alt: 'nail3' }
    ];

    images.forEach((image) => {
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.style.width = "300px"; // Set width of images
        img.style.height = "auto"; // Maintain aspect ratio
        container.appendChild(img);
    });
});