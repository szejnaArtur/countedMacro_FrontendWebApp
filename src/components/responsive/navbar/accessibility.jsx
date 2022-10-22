import styled from 'styled-components';

const AccessibilityContainer = styled.div`
  display: flex;
`;

const SettingButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #6adf76;
  background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #00c9ff;
  }

  &:focus {
    background-color: #00c9ff;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LogoutButton = styled.button`
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #00c9ff;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #00c9ff;
  }
  
  &:focus{
    color: #fff;
    background-color: #00c9ff;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const Accessibility = (props) => {
    return (
        <AccessibilityContainer>
            <SettingButton>
                Settings
            </SettingButton>
            <LogoutButton>
                Logout
            </LogoutButton>
        </AccessibilityContainer>
    )
}

export default Accessibility;