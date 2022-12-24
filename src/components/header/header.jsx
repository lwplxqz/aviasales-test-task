import React from 'react';

import './header.scss'
import { ReactComponent as Logo } from './logo.svg';

function Header() {
    return (<header className='app-header'>
        <Logo style={{ filter: 'drop-shadow(0px 2px 5px rgba(0,0,0, 0.3))' }} />
    </header>);
}

export default Header;