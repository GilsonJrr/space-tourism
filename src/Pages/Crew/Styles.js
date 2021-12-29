import BackMobile from '../../Img/Crew/background-crew-mobile.jpg';
import BackTablet from '../../Img/Crew/background-crew-tablet.jpg';
import BackDesktop from '../../Img/Crew/background-crew-desktop.jpg';
import styled from 'styled-components';

export const Container = styled.div`
    background-color: #0B0D17;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${BackMobile});
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media(min-width: 600px){
        background-image: url(${BackTablet});
    }
    @media(min-width: 900px){
        background-image: url(${BackDesktop});
    }
`;

export const DivBody = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    @media(min-width: 600px){
        flex-direction: column-reverse;
    }
    @media(min-width: 900px){
        width: 100%;
        flex-direction: row-reverse;
        justify-content: flex-end;
        height: 80%;
    }
`;

export const TitleSmall = styled.div`
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 2.7px;
    color: #D0D6F9;
    margin-bottom: 32px;
    width: 100%;
    @media(min-width: 600px){
        width: 50%;
        margin-top: 40px;
        font-size: 20px;
        line-height: 24px;
    }
    @media(min-width: 900px){
        width: 30%;
        font-size: 28px;
        line-height: 34px;
        margin-top: 120px;
    }
`;

export const Image = styled.img`
    height: 100%;
    width: 200px;
    align-self: center;
    @media(min-width: 600px){
        position: absolute;
        height: auto;
        width: 300px;
        bottom: 0px;
    }
    @media(min-width: 900px){
        height: auto;
        width: 450px;
    }
`;

export const Separation = styled.div`
    width: 327px;
    height: 1px;
    background: #383B4B;
    margin-top: 0px;
    @media(min-width: 600px){
        width: 0px;
    }
    @media(min-width: 900px){
        width: 0px;
        position: absolute;
    }
`;

export const DivImg = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    @media(min-width: 600px){
        flex-direction: column-reverse;
        height: 50%;
    }
    @media(min-width: 900px){
        position: absolute;
        width: 50%;
        bottom: 0px;
        right: 50px;
    }
`;

export const TextMenu = styled.div`
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    color: #FFFFFF;
`;

export const DivMenu = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 26px;
    margin-bottom: 20px;
    width: 100%;
    @media(min-width: 600px){
        width: 100%;
    }
    @media(min-width: 900px){
        margin-top: 0px;
        width: 120%;
    }
`;

export const MainText = styled.div`
    font-family: Barlow;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #D0D6F9;
    @media(min-width: 600px){
        font-family: Barlow;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
    }
    @media(min-width: 900px){
        text-align: left;
        width: 440px;
        margin-bottom: 100px;
    }
`;

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 24px;
    margin-right: 24px;
    width: 80%;
    max-width: 327px;
    align-items: center;
    justify-content: space-between;
    height: 50%;
    @media(min-width: 600px){
        width: 90%;
        max-width: 573px;
        margin-top: 120px; 
        align-items: center;
        flex-direction: column-reverse;
    }
    @media(min-width: 900px){
        width: 100%;
        max-width: 1000px;
        margin-top: 100px;
        align-items: flex-start;
        margin-left: 8%;
    }
`;

export const Position = styled.div`
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-bottom: 8px;
    @media(min-width: 600px){
        font-size: 24px;
        line-height: 28px;
    }
    @media(min-width: 900px){
        font-size: 32px;
        line-height: 37px;
        margin-top: 130px;
        text-align: left;
    }
`;

export const Name = styled.div`
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 20px;
    @media(min-width: 600px){
        font-size: 40px;
        line-height: 46px;
    }
    @media(min-width: 900px){
        text-align: left;
        font-size: 56px;
        line-height: 64px;
    }
`;

export const Button = styled.button`
    background: transparent;
    border: none;
`;

export const Selectd = styled.div`
    width: 10px;
    height: 10px;
    background: #FFFFFF;
    border-radius: 50px;
`;

export const UnSelectd = styled.div`
    width: 10px;
    height: 10px;
    background: #FFFFFF;
    border-radius: 50px;
    opacity: 0.17;
`;