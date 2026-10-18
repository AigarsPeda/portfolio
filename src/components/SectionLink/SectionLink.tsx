import Link from "next/link";
import { useRouter } from "next/router";
import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { scrollToSection } from "~/utils/sectionScroll";

type Props = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
> & {
  href: string;
};

export default function SectionLink({ href, ...props }: Props) {
  const router = useRouter();
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.currentTarget.target === "_blank"
    )
      return;

    const url = new URL(event.currentTarget.href);
    if (
      url.origin !== window.location.origin ||
      url.pathname.replace(/\/$/, "") !==
        window.location.pathname.replace(/\/$/, "") ||
      (url.search && url.search !== window.location.search) ||
      !url.hash
    )
      return;

    event.preventDefault();
    void router
      .push(`${router.asPath.split("#")[0]}${url.hash}`, undefined, {
        scroll: false,
      })
      .then((changed) => {
        if (changed) scrollToSection(url.hash);
      });
  };

  // Native fragment links retain queries without Next resolving them during SSR.
  return href.startsWith("#") ? (
    <a {...props} href={href} onClick={onClick} />
  ) : (
    <Link {...props} href={href} onClick={onClick} />
  );
}
