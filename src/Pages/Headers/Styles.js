import styled from 'styled-components';
import 'animate.css';

export const ContainerMobieleHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px; 
`;

export const Button = styled.button`
    display: flex;
    background: transparent;
    border: none;
`;

export const LongerMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 450px;
    height: 96px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    margin: -24px;
    @media(min-width: 900px){
        width: 1000px;
        min-width: 830px;
        max-width: 1000px;
        margin-right: -24px;
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
    animation: animate__bounceInRight;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 254px;
    height: 100%;
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