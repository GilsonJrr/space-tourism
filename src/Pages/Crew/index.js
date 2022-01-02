import React, {useState} from 'react';

import {Container, TitleSmall, Image, DivImg , MainText, DivText, Separation, DivBody, 
        DivMenu, TextMenu, Position, Name, Button, Selectd, UnSelectd} from './Styles';


import { Data } from './Data';

function Crew() {

  const [select, setSelect] = useState (0)

  return (
    <Container role="Crew"> 

        <TitleSmall> 02 MEET YOUR CREW </TitleSmall>

        <DivBody>

          <DivImg>
            <Image alt="CrewImages" src={Data[select].img}/>
            <Separation/>
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
              <Position>{Data[select].position}</Position>
              <Name>{Data[select].name}</Name>
              <MainText> {Data[select].mainText} </MainText>
            </div>
          </DivText>
          
        </DivBody>
      
    </Container>
  );
}

export default Crew;

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
      { props.select === props.id && <Selectd/> }
      { props.select !== props.id && <UnSelectd/> }
    </Button>
  )
}
