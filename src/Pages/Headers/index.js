import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';

import 'animate.css';

import logo from '../../Img/Shared/Logo.png';
import hamburger from '../../Img/Shared/icon-hamburger.png';
import exit from '../../Img/Shared/Exit.png';

import {ContainerMobieleHeader, Button, LongerMenu, TitleMenu, BackSideBar, DivButton, DivMenu, TitleMenuHam, Linha, Img, Selectd} from './Styles';

function Header() {

  const history = useHistory();

  const [menu, setMenu] = useState ([
    {id: 1, tilte: 'HOME', link: "/"},
    {id: 2, tilte: 'DESTINATION', link: "/Destination"},
    {id: 3, tilte: 'CREW', link: "/Crew"},
    {id: 4, tilte: 'TECHNOLOGY', link: "/Technology"},
  ])

  const [screen, setScreen] = useState(window.innerWidth);
  const [hamSize, setHamSize] = useState(21)
  const [sideBar, setSideBar] = useState(false)
  const [page, setPage] = useState('')

  const updateMedia = () => {
    setScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <ContainerMobieleHeader>

        <Img src={logo}/>

      <div>
        {screen  < 600 &&
          <div>
            { sideBar === false &&
            <Button
              onClick={()=> setSideBar(true)} 
              onMouseOver={()=> setHamSize(25)} 
              onMouseOut={()=> setHamSize(21)} 
              style={{cursor:'pointer'}}>
              <img src={hamburger} style={{height: hamSize}}/>
            </Button>}
          </div>
        }
        {screen  >= 600 && screen < 900 &&
          <LongerMenu>
            {menu.map((item) => {
              return(
                <Menu
                  id={item.id}
                  link={item.link}
                  tilte={item.tilte}
                  page={page}
                  setPage={setPage}
                  history={history}
                />
              );
            })}
          </LongerMenu>
        }
        {screen  > 900 &&
          <LongerMenu>
          <Linha/>
            {menu.map((item) => {
              return(
                <Menu
                  id={item.id}
                  link={item.link}
                  tilte={item.tilte}
                  page={page}
                  setPage={setPage}
                  history={history}
                />
              );
            })}
          </LongerMenu>
        }
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
            {menu.map((item) => {
              return(
                <SideBar
                  id={item.id}
                  link={item.link}
                  tilte={item.tilte}
                  page={page}
                  setPage={setPage}
                  history={history}
                />
              );
            })}
          </DivMenu>
        </BackSideBar>
      }
      
      
    </ContainerMobieleHeader>
  );
}

export default Header;

export function Menu (props){

  function HandleMenu (){
    props.setPage(props.id)
    setTimeout(() => {
      props.history.push(props.link)
      props.setPage(props.id)
    }, 500);
  }

  return(
    <Button onClick={HandleMenu} >
      
      <TitleMenu>{props.tilte}</TitleMenu>
      { props.page === props.id && <Selectd/> }
      { props.page !== props.id && <div style={{marginTop: 35}}/> }
      
    </Button>
  )
}

export function SideBar (props){
  return(
    <Button onClick={()=> props.history.push(props.link)} style={{cursor: 'pointer'}}>
      
      <TitleMenuHam>0{props.id-1} {props.tilte}</TitleMenuHam>
      
    </Button>
  )
}