import React, {useContext} from 'react';
import {BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton} from "../Common";
import {Marginer} from "../../marginer/Marginer";
import {AccountContext} from "../AccountContext";


const LoginForm = () => {

    const { switchToSignIn } = useContext(AccountContext);

    return(
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="E-mail"/>
            </FormContainer>
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit">Wyślij</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#" onClick={switchToSignIn}>
                Masz już konto?
                <BoldLink href="#"> Zaloguj się!</BoldLink>
            </MutedLink>

        </BoxContainer>
    )
}

export default LoginForm;