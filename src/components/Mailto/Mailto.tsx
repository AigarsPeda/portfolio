import type { FC, ReactNode } from "react";


interface MailtoProps {
  body?: string;
  email: string;
  subject?: string;
  children: ReactNode;
}

const Mailto: FC<MailtoProps> = ({ email, subject, body, children }) => {
  return (
    <a
      href={`mailto:${email}?subject=${encodeURIComponent(
        subject || "",
      )}&body=${encodeURIComponent(body || "")}`}
    >
      {children}
    </a>
  );
};

export default Mailto;
