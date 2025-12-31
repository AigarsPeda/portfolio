import { type FC, type ReactNode, useEffect } from "react";
import { useRef } from "react";
import { IoClose } from "react-icons/io5";
import useDelayUnmount from "~/hooks/useDelayUnmount";
import useOnClickOutside from "~/hooks/useOnClickOutside";
import classNames from "~/utils/classNames";

interface ModalLayoutProps {
  footer?: ReactNode;
  header?: ReactNode;
  children: ReactNode;
  isPadding?: boolean;
  isFullScreen?: boolean;
  isModalVisible: boolean;
  handleCancelClick: () => void;
  bgColor?: "white" | "gray" | "transparent";
}

const ModalLayout: FC<ModalLayoutProps> = ({
  header,
  footer,
  children,
  isFullScreen,
  isModalVisible,
  handleCancelClick,
  bgColor = "white",
}) => {
  const modalRef = useRef<HTMLDivElement>(null!);
  const { shouldRender, isAnimation } = useDelayUnmount(isModalVisible, 200);
  useOnClickOutside<HTMLDivElement>(modalRef, () => {
    handleCancelClick();
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (shouldRender) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [shouldRender]);

  return (
    <>
      {shouldRender && (
        <div
          id="menu"
          className={classNames(
            isAnimation ? "opacity-100" : "opacity-0",
            "bg-primary-dark/95 fixed inset-0 z-900 flex h-full w-full items-center justify-center backdrop-blur-sm transition-all duration-300 ease-out",
          )}
        >
          {/* Close button - positioned absolutely */}
          <button
            onClick={handleCancelClick}
            className="border-primary-light/20 bg-primary-dark/80 text-primary-light/70 hover:border-primary-accent/50 hover:bg-primary-dark hover:text-primary-accent absolute top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300"
          >
            <IoClose className="h-6 w-6" />
          </button>

          <div className="relative h-full w-full">
            <div
              className={classNames(
                !isFullScreen && "p-4 md:p-8",
                isFullScreen
                  ? "absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform"
                  : "absolute top-1/2 left-1/2 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 transform",
              )}
            >
              <div
                ref={modalRef}
                className={classNames(
                  isAnimation ? "scale-100 opacity-100" : "scale-95 opacity-0",
                  bgColor === "white" && "bg-white",
                  bgColor === "gray" && "bg-primary-dark-light/50",
                  bgColor === "transparent" && "bg-transparent",
                  isFullScreen ? "h-full w-full" : "h-[85vh] w-full",
                  "border-primary-light/10 flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ease-out",
                )}
              >
                {header && (
                  <div className="border-primary-light/10 flex items-center justify-between border-b p-4">
                    <div className="text-primary-light truncate text-lg font-medium">
                      {header}
                    </div>
                  </div>
                )}
                <div className="flex-1 overflow-auto">{children}</div>
                {footer && (
                  <div className="border-primary-light/10 border-t p-4">
                    {footer}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLayout;
