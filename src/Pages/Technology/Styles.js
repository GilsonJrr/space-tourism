import BackMobile from '../../Img/Technology/background-technology-mobile.jpg';
import BackTablet from '../../Img/Technology/background-technology-tablet.jpg';
import BackDesktop from '../../Img/Technology/background-technology-desktop.jpg';

import styled from 'styled-components';

export const Container = styled.div`
    background-color: #0B0D17;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${BackMobile});
    //height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    @media(min-width: 600px){
        background-image: url(${BackTablet});
        height: 100%;
        //max-height: 1024px;
    }
    @media(min-width: 900px){
        background-image: url(${BackDesktop});
        height: 100vh;
        //width: 100%; 
    }
`;

export const DivBody = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    @media(min-width: 600px){
        margin-top: 200px;
    }
    @media(min-width: 900px){
        margin-top: 120px;
        flex-direction: row-reverse;
        height: 100vh;
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
    margin-top: 100px;
    @media(min-width: 600px){
        position: absolute;
        left: 38.5px;
        top: 136px;
        font-size: 20px;
        line-height: 24px;
        margin-top: 0px;
    }
    @media(min-width: 900px){
        position: absolute;
        left: 166.5px;
        top: 212px;
        font-size: 28px;
        line-height: 34px;
    }
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    @media(min-width: 600px){
        height: auto;
        width: auto;
    }
    @media(min-width: 900px){
        height: auto;
        width: auto;
    }
`;

export const DivImg = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
    @media(min-width: 600px){
        //height: 60%;
    }
    @media(min-width: 900px){
        flex-direction: row;
        width: 40%;
        justify-content: flex-end;
        align-content: flex-end;
        align-items: flex-end;
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
    margin-bottom: 100px;
    @media(min-width: 600px){
        font-family: Barlow;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
    }
    @media(min-width: 900px){
        margin-bottom: 10px;
        text-align: left;
        width: 470px;
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
        flex-direction: column;
        margin-right: 80px;
        //margin-left: 30%;
    }
`;

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 80%;
    align-items: center;
    height: 50%;
    @media(min-width: 900px){
        flex-direction: row;
        width: 50%;
    }
`;

export const Tech = styled.div`
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    color: #D0D6F9;
    mix-blend-mode: normal;
    //opacity: 0.5;
    margin-bottom: 8px;
    @media(min-width: 600px){
        font-size: 24px;
        line-height: 28px;
    }
    @media(min-width: 900px){
        font-size: 32px;
        line-height: 37px;
        margin-top: 0px;
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
    display: flex;
    width: 40px;
    height: 40px;
    background: #FFFFFF;
    border-radius: 50px;
    justify-content: center;
    align-items: center;

    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 1px;
    @media(min-width: 600px){
        width: 60px;
        height: 60px;
    }
    @media(min-width: 900px){
        width: 80px;
        height: 80px;
        margin-bottom: 15px;
    }
`;

export const UnSelectd = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    background: #000;
    border-radius: 50px;
    //opacity: 0.17;
    border: 1px solid #41434C;
;
    justify-content: center;
    align-items: center;

    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 1px;

    color: #FFFFFF;
    @media(min-width: 600px){
        width: 60px;
        height: 60px;
    }
    @media(min-width: 900px){
        width: 80px;
        height: 80px;
        margin-bottom: 15px;
    }
`;