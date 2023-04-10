//  JS event to manipulate image styling
const frame = document.querySelector('.frame');

frame.addEventListener('mouseover', () => {
  frame.classList.add('hover');
});

frame.addEventListener('mouseout', () => {
  frame.classList.remove('hover');
});
