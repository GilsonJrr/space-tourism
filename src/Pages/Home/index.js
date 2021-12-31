import BackHomeMobile from '../../Img/Home/background-home-mobile.jpg'
import {ContainerHome, TitleSmall, TitleBig, MainText, DivText, CircleExplore, DivBody} from './Styles';

function Home() {
  return (
    <ContainerHome>

        <DivBody>

          <DivText>

            <TitleSmall> SO, YOU WANT TO TRAVEL TO </TitleSmall>

            <TitleBig>SPACE</TitleBig>

            <MainText>
              Let’s face it; if you want to go to space, you might as well 
              genuinely go to outer space and not hover kind of on the edge of it. 
              Well sit back, and relax because we’ll give you a truly out of this 
              world experience!
            </MainText>

          </DivText>

          <CircleExplore>
          EXPLORE
          </CircleExplore>

        </DivBody>
      
    </ContainerHome>
  );
}

export default Home;
