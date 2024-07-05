import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import StarCanvas from "./canvas/Stars";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ProjectDetails from "./Dialog/ProjectDetails";
import Publications from "./sections/Publication";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const MainContent = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <Body>
      <StarCanvas />
      <AnimatePresence>
        <div>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Publications /> {/* Add the Publications section here */}
            <Contact />
          </Wrapper>
          <Footer />

          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </div>
      </AnimatePresence>
    </Body>
  );
};

export default MainContent;
