import styled from "styled-components";

const Footer = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
`;

export default Footer;