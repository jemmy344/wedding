import { photos } from "@/data/image";
import { useCallback, useState } from "react";
import Gallery from "react-photo-gallery";
import "./style.css";

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_event: any, { index }: any) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div style={{}}>
      <Gallery
        photos={photos.map((photo) => ({
          height: photo.height,
          width: photo.width,
          src: photo.src,
        }))}
        columns={(containerWidth: number) => {
          let columns = 1;
          if (containerWidth >= 500) columns = 3;
          if (containerWidth >= 900) columns = 4;
          if (containerWidth >= 1500) columns = 5;
          return columns;
        }}
        direction={"column"}
        onClick={openLightbox}
      />
      {viewerIsOpen && <></>}
    </div>
  );
};
export default PhotoGallery;