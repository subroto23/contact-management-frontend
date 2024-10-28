import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portals = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true only on the client side
    setMounted(true);
  }, []);

  // Render nothing on the server
  if (!mounted) return null;
  return createPortal(children, document.getElementById("portal") as Element);
};

export default Portals;
