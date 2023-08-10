var lightbox = new SimpleLightbox('.gallery a', {
  navText: ['prev', 'next'],
  overlay: false,
  nav: false,
  captionDelay: 100,
});

console.log(lightbox);

lightbox.on('shown.simplelightbox', () => {
  console.log();
});

lightbox.next();
