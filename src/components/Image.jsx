import React, { useRef, useState } from 'react';

const Image = ({ index, image }) => {
    const [isSelected, setIsSelected] = useState(false);
    const imageRef = useRef(null);

    const handleImageClick = () => {
        setIsSelected(!isSelected);
    };

    // Implement drag and drop logic using the HTML5 drag and drop API here

    return (
        <div
            className={`relative cursor-pointer p-2 rounded-lg ${isSelected ? 'border border-blue-500' : ''}`}
            ref={imageRef}
            onClick={handleImageClick}
            draggable={true}
        >
            <img src={image.url} alt={`Image ${index}`} className="w-full h-auto rounded-lg" />
            {isSelected && (
                <div className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-50 rounded-lg">
                    <p className="text-white font-bold">Selected</p>
                </div>
            )}
        </div>
    );
};

export default Image;
