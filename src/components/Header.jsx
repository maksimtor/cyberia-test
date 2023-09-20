import React, { useState } from 'react';
import '../assets/css/Header.css';
import CyberiaImage from '../assets/images/cyberia.png'
import SwitchImage from '../assets/images/switch.png'
import MenuBurger from '../assets/images/Menu-burger.svg'
import { CustomLink } from './CustomLink';

export const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
        <header>
          <div className='block__container'>
            <nav className='navbar'>
              <div className='navbar-container'>
                <CustomLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
                  <img src={CyberiaImage} alt="react-logo" />
                  <i className='fab fa-typo3' />
                </CustomLink>
                <div className='menu-icon' onClick={handleClick}>
                  <img src={MenuBurger} alt="react-logo" />
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'><CustomLink to="/" onClick={closeMobileMenu}>О нас</CustomLink></li>
                  <li className='nav-item'><CustomLink to="/" onClick={closeMobileMenu}>Услуги</CustomLink></li>
                  <li className='nav-item'><CustomLink to="/" onClick={closeMobileMenu}>Проекты</CustomLink></li>
                  <li className='nav-item'><CustomLink to="/" onClick={closeMobileMenu}>Вакансии</CustomLink></li>
                  <li className='nav-item'><CustomLink to="/" onClick={closeMobileMenu}>Контакты</CustomLink></li>
                  <li className='nav-item'><CustomLink to="/" onClick={closeMobileMenu}><img src={SwitchImage} alt="react-logo" /></CustomLink></li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        </>
    );
};


