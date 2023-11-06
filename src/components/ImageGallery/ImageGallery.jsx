import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';
import './style.css'
import { AiFillCheckSquare } from 'react-icons/ai';

import image1 from "../../assets/image-1.webp";
import image2 from "../../assets/image-2.webp";
import image3 from "../../assets/image-3.webp";
import image4 from "../../assets/image-4.webp";
import image5 from "../../assets/image-5.webp";
import image6 from "../../assets/image-6.webp";
import image7 from "../../assets/image-7.webp";
import image8 from "../../assets/image-8.webp";
import image9 from "../../assets/image-9.webp";
import image10 from "../../assets/image-10.jpeg";
import image11 from "../../assets/image-11.jpeg";

const Gallery = () => {
  const [images, setImages] = useState([
    { id: uuid(), src: image1 },
    { id: uuid(), src: image2 },
    { id: uuid(), src: image3 },
    { id: uuid(), src: image4 },
    { id: uuid(), src: image5 },
    { id: uuid(), src: image6 },
    { id: uuid(), src: image7 },
    { id: uuid(), src: image8 },
    { id: uuid(), src: image9 },
    { id: uuid(), src: image10 },
    { id: uuid(), src: image11 },
  ]);

  const [selectedImages, setSelectedImages] = useState([]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const updatedImages = [...images];
    const reorderedImage = updatedImages.splice(source.index, 1)[0];
    updatedImages.splice(destination.index, 0, reorderedImage);
    setImages(updatedImages);
  };

  const toggleImageSelection = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  const deleteImages = () => {
    const updatedImages = images.filter((image) => !selectedImages.includes(image.id));
    setImages(updatedImages);
    setSelectedImages([]);
  };

  return (
    <div className="m-12">

      <div className="selected-images-info flex justify-between border-b-2 mb-10 pb-4">
        {selectedImages.length > 0 ? (
          <div className="selected-images-count text-2xl font-bold">
            <span className="checkbox-like"></span> {selectedImages.length} {selectedImages.length === 1 ? 'File' : 'Files'} Selected
          </div>
        ) : <h2 className="text-2xl font-bold">Gallery</h2>}
        {selectedImages.length > 0 && (
          <div className="delete-button text-xl text-red-500 font-semibold">
            <button onClick={deleteImages}>Delete {selectedImages.length === 1 ? 'File' : 'Files'}</button>
          </div>
        )}
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="imageGallery" direction="both">
          {(provided) => (
            <div
              className="cards grid md:grid-cols-4 gap-3 md:gap-7"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {images.map(({ id, src }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                {(provided, snapshot) => (
                  <div
                    className={`image p-5 border-2 rounded-lg relative ${selectedImages.includes(id) ? 'selected' : ''} hover:overlay`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={() => toggleImageSelection(id)}
                  >
                    {selectedImages.includes(id) && (
                      <div className="check-icon">
                        {/* Add your check icon here */}
                        <AiFillCheckSquare className="text-4xl text-[#168be4]"></AiFillCheckSquare>
                      </div>
                    )}
                    <img src={src} alt="" />
                    {selectedImages.includes(id) && (
                      <div className="selection-overlay">
                        <span className="checkbox-like"></span>
                      </div>
                    )}
                  </div>
                )}
              </Draggable>
              
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Gallery;
