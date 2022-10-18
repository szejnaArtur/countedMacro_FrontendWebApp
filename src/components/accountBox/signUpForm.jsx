import React, {useContext} from 'react';
import {BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton} from "./common";
import {Marginer} from "../marginer";
import {AccountContext} from "./accountContext";


const SignUpForm = () => {

    const { switchToSignIn } = useContext(AccountContext);

    return(
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Imię i nazwisko"/>
                <Input type="email" placeholder="E-mail"/>
                <Input type="password" placeholder="Hasło"/>
                <Input type="password" placeholder="Powtórz Hasło"/>
            </FormContainer>
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit">Zarejestruj się</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#" onClick={switchToSignIn}>
                Masz konto?
                <BoldLink href="#"> Zaloguj się!</BoldLink>
            </MutedLink>

        </BoxContainer>
    )
}

export default SignUpForm;
