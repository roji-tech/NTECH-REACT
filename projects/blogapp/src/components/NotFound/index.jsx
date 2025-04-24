import React from "react";

const NotFound = () => {
  return (
    <NotFoundStyles>
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>
        Go back to the <a href="/">home page</a>.
      </p>
    </NotFoundStyles>
  );
};

export default NotFound;

import styled from "styled-components";

const NotFoundStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 20vh;
  height: 100vh;
  background-color: #f8f9fa;
  color: #343a40;

  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
  }
`;
