import React, {useState} from 'react';

import {Container, TitleSmall, Image, DivImg ,TitleBig, MainText, DivText, Separation, DivBody, 
        DivMenu, TextMenu, InfoTilte, Info, DivInfo, DivInfoAll, Button, Selectd} from './Styles';

import { Data } from './Data';

function Destination() {

  const [select, setSelect] = useState (0)

  return (
    <Container role="main"> 

        <DivBody>

          <DivImg>
            <TitleSmall> 01 PICK YOUR DESTINATION </TitleSmall>

            <Image alt="DestinationImages" src={Data[select].img}/>
          </DivImg>

          <DivText>
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

            <TitleBig>{Data[select].title}</TitleBig>

            <MainText> {Data[select].mainText} </MainText>

            <Separation/>

            <DivInfoAll>
              <DivInfo>
                <InfoTilte>AVG. DISTANCE</InfoTilte>
                <Info>{Data[select].avgDistance}</Info>
              </DivInfo>

              <DivInfo>
                <InfoTilte>Est. travel time</InfoTilte>
                <Info>{Data[select].estTravel}</Info>
              </DivInfo>
            </DivInfoAll>
          </DivText>
          
        </DivBody>
      
    </Container>
  );
}

export default Destination;

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
      <TextMenu style={{fontSize: menuSize}}>{props.title}</TextMenu>
      { props.select === props.id && <Selectd/> }
      { props.select !== props.id && <div/> }
    </Button>
  )
}
