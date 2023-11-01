import React, { useState } from 'react';
import Gallery from './components/Gallery';
import './App.css';
import image1 from './assets/image-1.webp'
import image2 from './assets/image-2.webp'
import image3 from './assets/image-3.webp'
import image4 from './assets/image-4.webp'
import image5 from './assets/image-5.webp'

function App() {
  const [images, setImages] = useState([image1, image2, image3, image4]); // Initial images array

  const handleImageReorder = (newImages) => {
    setImages(newImages);
  };

  const handleImageDelete = (selectedImages) => {
    const filteredImages = images.filter((image) => !selectedImages.includes(image));
    setImages(filteredImages);
  };

  return (
    <div className="App">
      <Gallery
        images={images}
        onImageReorder={handleImageReorder}
        onImageDelete={handleImageDelete}
      />
    </div>
  );
}

export default App;
