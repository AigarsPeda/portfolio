import { type FC } from "react";

interface MailtoProps {
  body?: string;
  email: string;
  subject?: string;
  children: JSX.Element | JSX.Element[] | string;
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
