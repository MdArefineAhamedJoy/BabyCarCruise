import React, { useEffect, useState } from "react";
import GalleryComponent from "react-photo-gallery";

const Gallery = () => {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    fetch('gallery.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching photo data:', error);
      });
  }, []);

  return (
    <div className="grid">
      <GalleryComponent photos={photoData} />
    </div>
  );
};

export default Gallery;
