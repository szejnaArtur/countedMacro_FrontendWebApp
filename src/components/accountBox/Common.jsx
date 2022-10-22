import styled from 'styled-components';

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  transition: all 250ms ease-in-out;

  &:hover {
    color: rgb(180, 180, 180);
  }

  &:focus {
    outline: none;
    color: rgb(180, 180, 180);
  }
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: rgb(56, 142, 60);
  font-weight: 500;
  text-decoration: none;
`;

export const Input = styled.input`
  height: 42px;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0 10px;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 1.4px solid rgb(56, 142, 60);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: auto;
  padding: 11px 25%;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(56, 142, 60);
  background: linear-gradient(58deg, rgb(139, 195, 74) 20%, rgba(56, 142, 60) 100%);

  &:hover {
    filter: brightness(1.03);
  }
`