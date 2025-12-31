import { type FC } from "react";
import { IoClose } from "react-icons/io5";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import useDelayUnmount from "~/hooks/useDelayUnmount";
import useWindowSize from "~/hooks/useWindowSize";

interface ImageModalProps {
  isModalVisible: boolean;
  startImageIndex: number;
  handleModalClose: () => void;
  images: { original: string; thumbnail: string }[];
}

const ImageModal: FC<ImageModalProps> = ({
  images,
  isModalVisible,
  startImageIndex,
  handleModalClose,
}) => {
  const { windowSize } = useWindowSize();
  const isMobile = windowSize.width < 768;
  const { shouldRender, isAnimation } = useDelayUnmount(isModalVisible, 200);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-900 transition-all duration-300 ${
        isAnimation ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className="bg-primary-dark/98 absolute inset-0 backdrop-blur-md"
        onClick={handleModalClose}
      />

      {/* Close button */}
      <button
        onClick={handleModalClose}
        className="border-primary-light/20 bg-primary-dark/80 text-primary-light/70 hover:border-primary-accent/50 hover:bg-primary-dark hover:text-primary-accent absolute top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-sm transition-colors duration-300"
      >
        <IoClose className="h-6 w-6" />
      </button>

      {/* Gallery container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-2 py-16 md:px-16 md:py-20">
        <div className="h-full w-full max-w-6xl">
          <ImageGallery
            items={[...images]}
            showPlayButton={false}
            startIndex={startImageIndex}
            showFullscreenButton={false}
            thumbnailPosition="bottom"
            showThumbnails={!isMobile}
            slideDuration={300}
            slideInterval={3000}
            renderItem={(item) => (
              <div
                className="flex items-center justify-center px-4 md:px-12"
                style={{
                  height: !isMobile
                    ? "calc(85vh - 180px)"
                    : "calc(85vh - 80px)",
                }}
              >
                <img
                  src={item.original}
                  alt=""
                  className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                />
              </div>
            )}
            renderThumbInner={(item) => (
              <div className="relative h-16 w-full overflow-hidden rounded-md">
                <img
                  src={item.thumbnail}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
