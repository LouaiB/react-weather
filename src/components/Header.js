import React from 'react'
import ThemePicker from '../theming/ThemePicker';
import '../styles/Header.sass';
import logo from '../logo.png';

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" src={logo} />
            </div>
            <ThemePicker />
        </div>
    )
}
