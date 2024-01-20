import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import photoGalleryData from "./PhotoGalleryData"; // Import the data
import Modal from "react-modal";

function PhotoGallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onDrop = (pictureFiles) => {
    setImages([...images, ...pictureFiles]);
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-screen-lg p-4 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
          maxFileSize={5242880} // 5MB
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {photoGalleryData.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`img-${index}`}
              className="w-full h-40 object-cover rounded-md cursor-pointer"
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="overlay"
          contentLabel={`img-${selectedImage}`}
        >
          <div className="flex items-center justify-center h-screen top-10">
            <img
              src={
                selectedImage !== null ? photoGalleryData[selectedImage] : ""
              }
              alt={`img-${selectedImage}`}
              className="w-[30%] h-auto rounded-lg"
            />
          </div>
          <button className="close-btn" onClick={closeModal}>
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
}

export default PhotoGallery;
