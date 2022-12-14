import React, {useContext, useState} from 'react';
import { useNavigate } from "react-router-dom";

import {BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton} from "../Common";
import {Marginer} from "../../marginer/Marginer";
import {AccountContext} from "../AccountContext";
import AuthenticationService from '../../authentication/AuthenticationService.js';
import styled from "styled-components";

const Valider = styled.div`
  height: 30px;
  width: 30px;
  margin: 8px;
  position: absolute;
  background: #fff59d;
  text-align: center;
`;

const LoginForm = (props) => {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const {switchToSignUp, switchToForget} = useContext(AccountContext);

    const handleEmailChange = (event) => {
        const {value} = event.target;
        setEmail(value);
    }

    const handlePasswordChange = (event) => {
        const {value} = event.target;
        setPassword(value);
    }

    const loginClicked = () => {
        AuthenticationService
            .executeJwtAuthenticationService(email, password)
            .then(
                (response) => {
                    AuthenticationService.registerSuccessfulLoginForJwt(email, response.data.token);
                    props.click(AuthenticationService.isUserLoggedIn());
                    setHasLoginFailed(false);
                    setShowSuccessMessage(true);
                    navigate('/home')
                }
            ).catch(
            () => {
                setHasLoginFailed(true);
                setShowSuccessMessage(true);
            }
        )
    }

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="E-mail" value={email} onChange={handleEmailChange}/>
                <Input type="password" placeholder="Has??o" value={password} onChange={handlePasswordChange}/>
            </FormContainer>
            <Marginer direction="vertical" margin={10}/>
            <MutedLink href="#" onClick={switchToForget}>Zapomnia??e?? has??a?</MutedLink>
            <Marginer direction="vertical" margin="1.6em"/>
            <SubmitButton type="submit" onClick={loginClicked}>Zaloguj si?? </SubmitButton>
            <Marginer direction="vertical" margin="1em"/>
            <MutedLink href="#" onClick={switchToSignUp}>
                Nie masz konta?
                <BoldLink href="#"> Zarejestruj si?? !</BoldLink>
            </MutedLink>

        </BoxContainer>
    )
}

export default LoginForm;