// import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import Container from "@/components/ui/Container/Container";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>
        <Navbar />
        <div className=" overflow-x-hidden">{children}</div>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default layout;
