import React, {useState, useEffect} from 'react';

import logo from '../../Img/Shared/Logo.png';
import hamburger from '../../Img/Shared/icon-hamburger.png';
import exit from '../../Img/Shared/Exit.png';

import {ContainerMobieleHeader, Button, LongerMenu, TitleMenu, BackSideBar, DivButton, DivMenu, TitleMenuHam} from './Styles';

function Header() {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);
  const [hamSize, setHamSize] = useState(21)
  const [sideBar, setSideBar] = useState(false)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <ContainerMobieleHeader>

        <img src={logo}/>

      <div>
        {isDesktop ? (
          <div>
            <LongerMenu>
              <Button>
                <TitleMenu>HOME</TitleMenu>
              </Button>
              <TitleMenu>DESTINATION</TitleMenu>
              <TitleMenu>CREW</TitleMenu>
              <TitleMenu>TECHNOLOGY</TitleMenu>
            </LongerMenu>
          </div>
        ) : (
          <div>
            { sideBar === false &&
            <Button
              onClick={()=> setSideBar(true)} 
              onMouseOver={()=> setHamSize(25)} 
              onMouseOut={()=> setHamSize(21)} 
              style={{cursor:'pointer'}}>
              <img src={hamburger} style={{height: hamSize}}/>
            </Button>
            }
          </div>
        )}
      </div>
      
      { sideBar &&
        <BackSideBar>
          <DivButton>
            <Button
              onClick={()=> setSideBar(false)} 
              style={{cursor:'pointer'}}>
              <img src={exit} style={{height: hamSize}}/>
            </Button>
          </DivButton>
          <DivMenu>
              <TitleMenuHam>00 HOME</TitleMenuHam>
              <TitleMenuHam>01 DESTINATION</TitleMenuHam>
              <TitleMenuHam>02 CREW</TitleMenuHam>
              <TitleMenuHam>03 TECHNOLOGY</TitleMenuHam>
          </DivMenu>
        </BackSideBar>
      }
      
      
    </ContainerMobieleHeader>
  );
}

export default Header;