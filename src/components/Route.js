import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const onlocationChange = (e) => {
    setCurrentPath(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener("popstate", onlocationChange);

    return () => {
      window.removeEventListener("popstate", onlocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
