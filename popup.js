document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('randomImage');
    const refreshBtn = document.getElementById('refreshBtn');
    function loadNewImage() {
      const newUrl = `https://picsum.photos/400/300?random=${Date.now()}`;
      image.src = newUrl;
    }
  
    refreshBtn.addEventListener('click', loadNewImage);
  });