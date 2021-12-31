import styled from 'styled-components';
import 'animate.css';
import { Link } from 'react-router-dom';

export const ContainerMobieleHeader = styled.div`
    position: absolute;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    width: 100vw;
    @media(min-width: 600px){
        padding-top: 0px;
        width: 100%;
    }
    @media(min-width: 900px){
        padding-top: 24px;
        width: 100%;
    }
`;

export const Button = styled.button`
    display: flex;
    background: transparent;
    border: none;
    flex-direction: column;
`;

export const LongerMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 450px;
    height: 96px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    margin-top: -24px;
    @media(min-width: 900px){
        width: 1000px;
        min-width: 830px;
        max-width: 1000px;
        margin-right: 0px;
        margin-top: 0px;
    }
`;

export const Img = styled.img`
    margin-left: 24px;
    @media(min-width: 900px){
        margin-top: 0px;
    }
`;

export const TitleMenu = styled.div`
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    color: #FFFFFF;
`;

export const TitleMenuHam = styled.div`
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 2.3625px;
    color: #FFFFFF;
    margin-top: 40px;
`;

export const BackSideBar = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 254px;
    height: 100vh;
    right: 0px;
    top: 0px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(1rem);
`;

export const DivButton = styled.div`
    display: flex;
    margin: 30px;
    justify-content: flex-end;
`;

export const DivMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    margin-left: 32px;
`;

export const Linha = styled.div`
    position: absolute;
    width: 60%;
    height: 1px;
    right: 90%;
    top: 50%;

    background: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.25;
`;

export const Selectd = styled.div`
    width: 100%;
    height: 3px;
    background: #FFFFFF;
    margin-top: 35px;
`;