
//backround beweging
const imageContainer = document.querySelector('.image-container');
function moveBackground(e) {
  const width = imageContainer.offsetWidth;
  const height = imageContainer.offsetHeight;
  const x = e.clientX;
  const y = e.clientY;
  const moveX = (x / width) * 12;
  const moveY = (y / height) * 12;
  imageContainer.style.backgroundPosition = `${moveX}% ${moveY}%`;
}
imageContainer.addEventListener('mousemove', moveBackground);

