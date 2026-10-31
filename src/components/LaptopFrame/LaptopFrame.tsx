import type { ReactNode } from "react";

export default function LaptopFrame({
  children,
  notification = false,
}: {
  children: ReactNode;
  notification?: boolean;
}) {
  return (
    <div
      className={
        notification
          ? "laptop-frame laptop-frame--notification"
          : "laptop-frame"
      }
    >
      <div className="laptop-lid">
        <div className="laptop-screen">
          <div className="laptop-app-window">{children}</div>
          {notification && (
            <svg
              className="laptop-cursor"
              viewBox="0 0 24 28"
              aria-hidden="true"
            >
              <path
                d="M3 2v21l5-5 4 8 4-2-4-8h8Z"
                fill="#fff"
                stroke="#131820"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <div className="laptop-taskbar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="laptop-base" aria-hidden="true" />
    </div>
  );
}
