import React from 'react';
import { User32, Code32, Portfolio32, Education32 } from "@carbon/icons-react";

import { Container,Spacer,NavWrapper, NavButton, NavLink } from './style';

const MobileNav = () =>{
  return(
    <Container>
      <Spacer/>
      <NavWrapper>
        <NavLink to="/">
          <NavButton
            hasIconOnly
            renderIcon={User32}
            inconDescription="About Me"
            tooltopPosition="bottom"
          />
        </NavLink>
        <NavLink to="/projects">
          <NavButton
            hasIconOnly
            renderIcon={Code32}
            inconDescription="Projects"
            tooltopPosition="bottom"
          />
        </NavLink>
        <NavLink to="/work">
          <NavButton
            hasIconOnly
            renderIcon={Portfolio32}
            inconDescription="Work"
            tooltopPosition="bottom"
          />
        </NavLink>
        <NavLink to="/education">
          <NavButton
            hasIconOnly
            renderIcon={Education32}
            inconDescription="Education"
            tooltopPosition="bottom"
          />
        </NavLink>
      </NavWrapper>
    </Container>
  );
};

export default MobileNav; 