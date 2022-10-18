import React, {useState} from 'react';
import styled from 'styled-components';
import LoginForm from './loginForm';
import {motion} from "framer-motion";
import {AccountContext} from "./accountContext";
import SignUpForm from "./signUpForm";
import ForgetForm from "./forgetForm";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em 5em 1.8em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(56, 142, 60);
  background: linear-gradient(58deg, rgb(134, 191, 70) 20%, rgb(56, 142, 60) 100%);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
  transition: all 0.5s ease-in-out;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 7px 0 0 0;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
}

const AccountBox = (probs) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [active, setActive] = useState("signIn");

    const playExpandingAnimation = () => {
        setIsExpanded(true);
        setTimeout(() => {
            setIsExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    }

    const switchToSignIn = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signIn");
        }, 400)
    };

    const switchToSignUp = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signUp");
        }, 400)
    };

    const switchToForget = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("forget");
        }, 400)
    };

    const contextValue = {switchToSignUp, switchToSignIn, switchToForget};

    return (
        <AccountContext.Provider value={contextValue}>
            <BoxContainer>
                <TopContainer>
                    <BackDrop
                        initial={false}
                        animate={isExpanded ? "expanded" : "collapsed"}
                        variants={backdropVariants}
                        transition={expandingTransition}
                    />
                    {active === "signIn" && <HeaderContainer>
                        <HeaderText>Witaj</HeaderText>
                        <HeaderText>Ponownie</HeaderText>
                        <SmallText>Zaloguj się aby kontynuować !</SmallText>
                    </HeaderContainer>}
                    {active === "signUp" && <HeaderContainer>
                        <HeaderText>Stwórz</HeaderText>
                        <HeaderText>Konto</HeaderText>
                        <SmallText>Zarejestruj się aby kontynuować !</SmallText>
                    </HeaderContainer>}
                    {active === "forget" && <HeaderContainer>
                        <HeaderText>Zapomniałeś</HeaderText>
                        <HeaderText>Hasła?</HeaderText>
                        <SmallText>Podaj swój e-mail!</SmallText>
                    </HeaderContainer>}
                </TopContainer>
                <InnerContainer>
                    {active === "signIn" && <LoginForm />}
                    {active === "signUp" && <SignUpForm />}
                    {active === "forget" && <ForgetForm />}
                </InnerContainer>
            </BoxContainer>
        </AccountContext.Provider>
    )
}

export default AccountBox;