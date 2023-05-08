// Get all the blocks and the extra block
const blocks = document.querySelectorAll('.block');
const extraBlock = document.querySelector('.extra-block');

// Set the initial "it" block
let itBlock = blocks[Math.floor(Math.random() * blocks.length)];
itBlock.classList.add('it');

// Add event listener to each block
blocks.forEach(block => {
  block.addEventListener('click', () => {
    // If the clicked block is "it", game over
    if (block.classList.contains('it')) {
      alert('Game Over!');
      location.reload();
    } else {
      // Move the extra block to the clicked block
      extraBlock.style.top = `${block.offsetTop}px`;
      extraBlock.style.left = `${block.offsetLeft}px`;
      // Switch "it" block
      itBlock.classList.remove('it');
      block.classList.add('it');
      itBlock = block;
    }
  });
});
