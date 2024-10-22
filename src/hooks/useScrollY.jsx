import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY; // Get the vertical scroll position
    setScrollPosition(position);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollPosition };
};

export default useScrollPosition;
