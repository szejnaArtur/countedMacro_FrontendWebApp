import styled from 'styled-components';
import ReactLogo from '../../assets/images/logo192.png';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 29px;
  height: 29px;
  
  img{
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.div`
  font-size: 16px;
  margin: 0 0 0 4px;
  font-weight: 500;
  color: #222;
`

const Logo = (props) => {
    return(
        <LogoWrapper>
            <LogoImg>
                <img src={ReactLogo} alt="Web Logo" />
            </LogoImg>
            <LogoText>
                CountedMacro
            </LogoText>
        </LogoWrapper>
    );
}

export default Logo;