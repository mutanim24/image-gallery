import React from 'react';
import Image from './Image';
import UploadButton from './UploadButton';

const Gallery = ({ images, onImageReorder, onImageDelete }) => {
    return (
        <div className="gallery">
            {images.map((image, index) => (
                <Image key={index} index={index} image={image} />
            ))}
            <UploadButton />
        </div>
    );
};

export default Gallery;
