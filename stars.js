function createStars(type, quantity) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < quantity; i++) {
    var star = document.createElement('div');
    star.className = `star type-${type}`;
    // Randomize starting positions more effectively
    star.style.left = `${randomNumber(0, 100)}vw`;
    star.style.top = `${randomNumber(0, 100)}vh`;  // Use top instead of bottom for better control
    star.style.animationDuration = `${randomNumber(50, 200)}s`;
    fragment.appendChild(star);
  }
  document.body.appendChild(fragment);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

createStars(1, 100);
createStars(2, 85);
createStars(3, 100);
