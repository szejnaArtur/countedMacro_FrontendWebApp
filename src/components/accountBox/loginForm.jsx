import React from 'react';
import {BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton} from "./common";
import {Marginer} from "../marginer";


const LoginForm = () => {
    return(
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Forget your password?</MutedLink>
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit">Signin</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Don't have account?
                <BoldLink href="#"> Sign up!</BoldLink>
            </MutedLink>

        </BoxContainer>
    )
}

export default LoginForm;