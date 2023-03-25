import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <h1>SharedLayout</h1>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  )
}


