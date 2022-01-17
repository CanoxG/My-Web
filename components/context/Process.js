import React from "react";
import Container from "../container/Container";
import H3 from '/components/head_line/H3'

export default function Process({ children }) {
  return (
    <div
      className="brightness-75 h-96 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: 'url("/images/screen.png")' }}
    >
      <Container>
        <div className="bg-amber-50 opacity-80 ">
          <div className='flex justify-center'>
          <H3>
            PROJECT DESIGN & DEVELOPMENT PROCESS
          </H3>
          </div>
          <div
            className="grid grid-cols-3 gap-2 px-2 pt-4 rounded items-end
        sm:grid-cols-3 sm:gap-16 md:grid-cols-6 md:gap-1"
          >
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
}
