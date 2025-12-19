import { type FC } from "react";
import ModalLayout from "~/components/ModalLayout/ModalLayout";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
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

  return (
    <ModalLayout
      bgColor="gray"
      isModalVisible={isModalVisible}
      handleCancelClick={handleModalClose}
    >
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <div className="h-full w-full max-w-5xl">
          <ImageGallery
            items={[...images]}
            showPlayButton={false}
            startIndex={startImageIndex}
            showFullscreenButton={false}
            thumbnailPosition="bottom"
            showThumbnails={!isMobile}
            renderItem={(item) => (
              <div
                className="flex items-center justify-center"
                style={{
                  height: !isMobile
                    ? "calc(90vh - 300px)"
                    : "calc(90vh - 120px)",
                }}
              >
                <img
                  src={item.original}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            )}
          />
        </div>
      </div>
    </ModalLayout>
  );
};

export default ImageModal;
