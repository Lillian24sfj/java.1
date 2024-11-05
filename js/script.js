const mainContent = document.getElementById("content");
const mainImage = document.getElementById("img");
const gallery = document.getElementById("gallery");

// console.log(gallery);

// mainContent.textContent = randomNum;
const images = [
  "../images/bilde1.jpg",
  "../images/bilde2.jpg",
  "../images/bilde3.jpg",
  "../images/bilde4.jpg",
  "../images/bilde5.jpg",
];

console.log(images.length);
console.log(images[2]);

const randomNum = Math.floor(Math.random() * images.length);

// console.log(randomNum);
// console.log(images[randomNum])

mainImage.src = images[randomNum];

images.forEach((URL) => {
  const newImage = document.createElement("img");
  newImage.src = URL;

  gallery.appendChild(newImage);
});

// gallery.appendChild(newImage);
