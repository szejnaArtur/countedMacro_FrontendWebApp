import styled from 'styled-components';

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 250ms ease-in-out;

  &:hover {
    border-top: 2px solid #3ecc71;
  }

  &:active {
    border-top: 2px solid #fff279;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const NavLinks = (props) => {
    return(
      <NavLinksContainer>
          <LinksWrapper>
              <LinkItem>
                  <Link href="#">O nas</Link>
              </LinkItem>
              <LinkItem>
                  <Link href="#">Instrukcja</Link>
              </LinkItem>
              <LinkItem>
                  <Link href="#">Explore</Link>
              </LinkItem>
              <LinkItem>
                  <Link href="#">Impact</Link>
              </LinkItem>
          </LinksWrapper>
      </NavLinksContainer>
    );
}

export default NavLinks;