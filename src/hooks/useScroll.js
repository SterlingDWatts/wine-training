import { useState, useEffect } from "react";

const useScroll = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [showNav, setShowNav] = useState(true);
  const [atTop, setIsAtTop] = useState(window.pageYOffset === 0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPos = window.pageYOffset;
      setShowNav(newScrollPos < prevScrollPos);
      setPrevScrollPos(window.pageYOffset);
      setIsAtTop(window.pageYOffset === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return [showNav, atTop];
};

export default useScroll;
