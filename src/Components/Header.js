import React from 'react'
import AppLogo from './AppLogo'
import Search from './Search'
import Profile from './Profile'

function Header() {
    return (
        <div className="header-main">
            <AppLogo />
            <Search />
            <Profile />
        </div>
    )
}

export default Header