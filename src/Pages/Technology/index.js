import React, {useState, useEffect} from 'react';

import {Container, TitleSmall, Image, DivImg , MainText, DivText, DivBody, 
        DivMenu, TextMenu, Tech, Name, Button, Selectd, UnSelectd} from './Styles';

import { Data } from './Data';

function Technology() {

  const [select, setSelect] = useState (0)
  const [screen, setScreen] = useState(window.innerWidth);

  const updateMedia = () => {
    setScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Container>

        <TitleSmall> 03 SPACE LAUNCH 101 </TitleSmall>

        <DivBody>

          <DivImg>
            {
              screen >= 900 ?
              <Image src={Data[select].imgWeb}/>
              :
              <Image src={Data[select].img}/>
            }
          </DivImg>

          <DivText>
            <div>
              <DivMenu>
                {Data.map((item) => {
                  return(
                    <div key={item.id}>
                      <Menu
                        title={item.title}
                        id={item.id}
                        select={select}
                        setSelect={setSelect}
                      />
                    </div>
                  );
                })}
              </DivMenu>
            </div>
            <div>
              <Tech>THE TERMINOLOGY…</Tech>
              <Name>{Data[select].name}</Name>
              <MainText> {Data[select].mainText} </MainText>
            </div>
          </DivText>
          
        </DivBody>
      
    </Container>
  );
}

export default Technology;

export function Menu (props){

  const [menuSize, setMenuSize] = useState (14)

  function HandleSelect (){
    props.setSelect(props.id)
  }

  return(
    <Button 
      onMouseOver={()=> setMenuSize(16)} 
      onMouseOut={()=> setMenuSize(14)}
      onClick={HandleSelect}
    >
      { props.select === props.id && <Selectd> {props.id+1} </Selectd> }
      { props.select !== props.id && <UnSelectd> {props.id+1} </UnSelectd> }
    </Button>
  )
}
