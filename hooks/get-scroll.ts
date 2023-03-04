import React from "react";

const useGetScroll = () => {
  const [scroll, setScroll] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const update = () => {
        console.log("scroll");
        setScroll({ x: window.scrollX, y: window.scrollY });
      };

      window.addEventListener("scroll", update);
    }
  }, []);

  return scroll;
};

export default useGetScroll;
