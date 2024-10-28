"use client";
import { useState } from "react";
import Modals from "./ui/Modals/Modals";
import Button from "./ui/Button/Button";

const HomepageTesting = () => {
  const [modals, setModals] = useState(false);
  const handleClose = () => {
    setModals((prev) => !prev);
  };
  return (
    <>
      <Button onClick={() => setModals((prev) => !prev)}>Open Models</Button>
      <Modals isOpen={modals} onClose={handleClose}>
        <h1>Modlas Inner Text</h1>
      </Modals>
    </>
  );
};

export default HomepageTesting;
