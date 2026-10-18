import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

interface ImageModalProps {
  isModalVisible: boolean;
  startImageIndex: number;
  handleModalClose: () => void;
  images: { original: string; thumbnail: string; alt?: string }[];
  imageClassName?: string;
}

export default function ImageModal({
  images,
  isModalVisible,
  startImageIndex,
  handleModalClose,
  imageClassName = "",
}: ImageModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(startImageIndex);

  useEffect(() => {
    const element = dialog.current;
    if (!element || !isModalVisible) return;
    setIndex(startImageIndex);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalVisible, startImageIndex]);

  const move = (direction: number) =>
    setIndex(
      (current) => (current + direction + images.length) % images.length,
    );
  const image = images[index];

  return (
    <dialog
      ref={dialog}
      className="image-dialog"
      aria-label="Project screenshots"
      onCancel={handleModalClose}
      onKeyDown={(event) => {
        if (images.length < 2) return;
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
      }}
    >
      <div className="gallery-toolbar">
        <p aria-live="polite">
          {index + 1} / {images.length}
        </p>
        <button
          className="icon-button"
          type="button"
          onClick={handleModalClose}
          aria-label="Close image gallery"
        >
          <FiX aria-hidden="true" />
        </button>
      </div>
      <div
        className="gallery-stage"
        onClick={(event) => {
          if (event.target === event.currentTarget) handleModalClose();
        }}
      >
        {images.length > 1 && (
          <button
            type="button"
            className="icon-button gallery-previous"
            aria-label="Previous screenshot"
            onClick={() => move(-1)}
          >
            <FiChevronLeft aria-hidden="true" />
          </button>
        )}
        {image && (
          <img
            src={image.original}
            alt={image.alt ?? `Project screenshot ${index + 1}`}
            className={`gallery-full-image ${imageClassName}`}
          />
        )}
        {images.length > 1 && (
          <button
            type="button"
            className="icon-button gallery-next"
            aria-label="Next screenshot"
            onClick={() => move(1)}
          >
            <FiChevronRight aria-hidden="true" />
          </button>
        )}
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((item, itemIndex) => (
            <button
              key={item.original}
              className={
                itemIndex === index
                  ? "gallery-thumbnail is-active"
                  : "gallery-thumbnail"
              }
              type="button"
              aria-label={`View screenshot ${itemIndex + 1}`}
              aria-pressed={itemIndex === index}
              onClick={() => setIndex(itemIndex)}
            >
              <img src={item.thumbnail} alt="" className={imageClassName} />
            </button>
          ))}
        </div>
      )}
    </dialog>
  );
}
