import React from "react";

function Gallery() {
  const images = [
    {
      id: 1,
      src: "/assets/Imagen01.jpg",
    },
    {
      id: 2,
      src: "/assets/Imagen02.jpg",
    },
    {
      id: 3,
      src: "/assets/Imagen03.jpg",
    },
    {
      id: 4,
      src: "/assets/Imagen04.jpg",
    },
  ];

  return (
    <div>
      {images.map((image) => (
        <div key={image.id}>
          <img width={800} height={450} src={image.src} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
