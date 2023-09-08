import { type FC } from "react";
import ModalLayout from "~/components/ModalLayout/ModalLayout";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

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
  return (
    <ModalLayout
      bgColor="gray"
      isModalVisible={isModalVisible}
      handleCancelClick={handleModalClose}
    >
      <div className="flex h-full flex-col items-center justify-center">
        <ImageGallery
          items={[...images]}
          showPlayButton={false}
          startIndex={startImageIndex}
          showFullscreenButton={false}
          // showThumbnails={false}
        />
      </div>
    </ModalLayout>
  );
};

export default ImageModal;
