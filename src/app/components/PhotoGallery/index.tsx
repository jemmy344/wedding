/* eslint-disable @next/next/no-img-element */
import { photos } from "@/data/image";
import { useCallback, useState } from "react";
import Gallery from "react-photo-gallery";
import { v4 as uuidv4 } from "uuid";
import SlideModal from "./components/Modal";

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
    <div id="photo-album" className="md:mx-40 mx-6 pt-8">
      <div className="flex w-full justify-center items-center">
        <img src="/couple.gif" alt="GIF" className="h-48 w-78" />
      </div>
      <div className="flex w-full justify-center items-center pb-6">
      <h1 className="font-primary text-rose-gold">Some of our favourite photos</h1>
      </div>
      <Gallery
        photos={photos.map((photo) => ({
          height: photo.height,
          width: photo.width,
          src: photo.src,
          key: uuidv4(),
        }))}
        columns={(containerWidth: number) => {
          let columns = 1;
          if (containerWidth >= 500) columns = 2;
          if (containerWidth >= 700) columns = 3;
          if (containerWidth >= 900) columns = 4;
          if (containerWidth >= 1500) columns = 5;
          return columns;
        }}
        direction={"column"}
        onClick={openLightbox}
      />
      {viewerIsOpen && (
        <SlideModal
          images={photos}
          onClose={closeLightbox}
          currentIndex={currentImage}
        />
      )}
    </div>
  );
};
export default PhotoGallery;
