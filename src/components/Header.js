import styled from 'styled-components';
import logo from '../assets/shared/logo.svg';
import bars from '../assets/shared/icon-hamburger.svg';
import close from '../assets/shared/icon-close.svg';
import links from '../utils/links';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>

          <button type="button" className="nav-toggle">
            <img src={bars} alt="" />
          </button>
          <nav>
            <ul className="nav-links">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <Link to={url}>
                      <span>0{id}</span>
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  button {
    background: transparent;
  }
  nav {
    display: none;
  }
`;

export default Header;
