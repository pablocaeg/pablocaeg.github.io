function createStars(type, quantity) {
  const fragment = document.createDocumentFragment(); // Use a document fragment
  for (let i = 0; i < quantity; i++) {
    var star = document.createElement('div');
    star.className = `star type-${type}`; // More concise class setting
    star.style.left = `${randomNumber(1, 99)}vw`; // Changed to viewport width for responsiveness
    star.style.bottom = `${randomNumber(1, 99)}vh`; // Changed to viewport height for responsiveness
    star.style.animationDuration = `${randomNumber(50, 200)}s`;
    fragment.appendChild(star); // Append to the fragment
  }
  document.body.appendChild(fragment); // Append all at once for performance
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Correct range calculation
}

createStars(1, 100);
createStars(2, 85);
createStars(3, 100);
