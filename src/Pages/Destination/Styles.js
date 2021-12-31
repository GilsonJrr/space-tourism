import BackMobile from '../../Img/Destination/background-destination-mobile.jpg';
import BackTablet from '../../Img/Destination/background-destination-tablet.jpg';
import BackDesktop from '../../Img/Destination/background-destination-desktop.jpg';
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
    justify-content: flex-end;
    padding-bottom: 100px;
    @media(min-width: 600px){
        background-image: url(${BackTablet});
        //height: 100%;
    }
    @media(min-width: 900px){
        background-image: url(${BackDesktop});
        height: 100vh;
    }
`;

export const DivBody = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    //height: 100%;
    @media(min-width: 600px){

    }
    @media(min-width: 900px){
        flex-direction: row;
        align-items: baseline;
        justify-content: space-evenly;
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
    @media(min-width: 600px){
        position: absolute;
        left: 38.5px;
        top: 136px;
        font-size: 20px;
        line-height: 24px;
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
    height: 170px;
    width: 170px;
    align-self: center;
    @media(min-width: 600px){
        height: 300px;
        width: 300px;
    }
    @media(min-width: 900px){
        height: 450px;
        width: 450px;
    }
`;

export const DivImg = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    @media(min-width: 600px){
        margin-top: 100px;
    }
    @media(min-width: 900px){
        width: 50%;
        margin-top: 180px;
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
    @media(min-width: 900px){
        width: 40%;
        justify-content: space-between;
    }
`;

export const TitleBig = styled.div`
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 56px;
    line-height: 64px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 32px;
    @media(min-width: 600px){
        font-size: 80px;
        line-height: 92px;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    @media(min-width: 900px){
        text-align: left;
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
    align-self: center;
    justify-content: space-between;
    align-content: center;
    @media(min-width: 600px){
        width: 90%;
        max-width: 573px;
        margin-top: 10px; 
        align-items: center;
    }
    @media(min-width: 900px){
        width: 50%;
        align-items: flex-start;
    }
`;

export const Separation = styled.div`
    width: 327px;
    height: 1px;
    background: #383B4B;
    margin-top: 32px;
    @media(min-width: 600px){
        width: 573px;
    }
    @media(min-width: 900px){
        width: 444px;
    }
`;

export const InfoTilte = styled.div`
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 2.3625px;
    text-transform: uppercase;
    color: #D0D6F9;
`;

export const Info = styled.div`
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-top: 12px;
`;

export const DivInfo = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
    @media(min-width: 900px){
        margin-left: 0px;
        margin-right: 60px;
        align-items: flex-start;
    }
`;

export const DivInfoAll = styled.div`
    @media(min-width: 600px){
        display: flex;
    }
`;

export const Button = styled.button`
    background: transparent;
    border: none;
`;

export const Selectd = styled.div`
    width: 100%;
    height: 3px;
    background: #FFFFFF;
`;