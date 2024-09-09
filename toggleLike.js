function toggleLike(element) {
    const whiteHeart = element.querySelector('.white-heart');
    const purpleHeart = element.querySelector('.purple-heart');
    
    // Toggle between showing the white and purple hearts
    whiteHeart.classList.toggle('hidden');
    purpleHeart.classList.toggle('hidden');
  }
  