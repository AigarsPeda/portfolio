import { useEffect, useState } from "react";
import debounce from "~/utils/debounce";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", debounce(updateSize, 250));

    return (): void => window.removeEventListener("resize", updateSize);
  }, []);

  return { isMobile };
};

export default useIsMobile;
