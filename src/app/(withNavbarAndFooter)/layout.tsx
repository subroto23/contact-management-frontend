import Container from "@/components/ui/Container/Container";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <h1>Navbar</h1>
      <div className="min-h-screen">{children}</div>
      <p>Footer</p>
    </Container>
  );
};

export default layout;
