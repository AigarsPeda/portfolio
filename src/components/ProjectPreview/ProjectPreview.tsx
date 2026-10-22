import Image from "next/image";
import { useCopy } from "~/i18n";
import type { ProjectType } from "~/types/project.types";

export default function ProjectPreview({
  project,
  priority = false,
  thumbnail = false,
}: {
  project: ProjectType;
  priority?: boolean;
  thumbnail?: boolean;
}) {
  const copy = useCopy();
  const isMobile = project.aboutLink === "math-mews";
  const thumbnailImage = thumbnail ? project.thumbnailImage : undefined;

  if (isMobile) {
    return (
      <div className="project-preview project-preview--mobile">
        {project.screenshots?.slice(0, 2).map((screenshot, index) => (
          <Image
            key={screenshot.src}
            src={
              priority && !thumbnail
                ? screenshot.src
                : `/asset/previews/math-mews-${index === 0 ? "room" : "puzzle"}-360.webp`
            }
            alt={screenshot.alt}
            width={733}
            height={1512}
            unoptimized
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            className="preview-phone phone-screenshot-mask"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`project-preview project-preview--${project.aboutLink}${thumbnailImage ? " project-preview--thumbnail-cover" : ""}`}
    >
      <picture>
        <source
          srcSet={
            thumbnailImage ??
            `/asset/previews/${project.aboutLink}-640.webp 640w, /asset/previews/${project.aboutLink}-960.webp 960w, /asset/previews/${project.aboutLink}-1280.webp 1280w`
          }
          sizes={
            thumbnail
              ? "(max-width: 767px) 104px, (max-width: 1100px) 224px, 272px"
              : priority
                ? "(max-width: 767px) calc(100vw - 40px), 92vw"
                : "(max-width: 767px) calc(100vw - 40px), 46vw"
          }
        />
        <Image
          src={thumbnailImage ?? project.coverImage}
          alt={`${project.title} ${copy.preview}`}
          fill
          unoptimized
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          className="preview-image"
          sizes="(max-width: 767px) 100vw, 60vw"
        />
      </picture>
    </div>
  );
}
