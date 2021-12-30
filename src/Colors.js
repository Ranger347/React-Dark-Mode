import styled from "styled-components";
import { BsLightbulb } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const Body = styled.div`
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;

const TagLine = styled.span`
    color: ${props => props.theme.tagLineColor};
    font-size: 18px;
    transition: all .5s ease;
`;

const Modes = (props) => {
    const changeTheme = () => {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <MdDarkMode size={40} /> : <BsLightbulb size={40} />;
    const headline = props.theme === "light" ? ["moon", "dark"] : ["lightbulb", "light"];

    return (
        <Body>
            <Container>
                <Toggle onClick={changeTheme}>
                    {icon}
                </Toggle>
                <Title>Change Theme</Title>
                <TagLine>Click the {headline[0]} above to change the page into {headline[1]} mode</TagLine>
            </Container>
        </Body>
    );
};

export default Modes;