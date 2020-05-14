import React from 'react'
import './styles.scss'
import Logo from './../../assets/graphics/logo.png'

const Header = (props) =>{
    return (
        <header data-test = "HeaderComponent">
                <div className = "wrap">
                    <div className = 'logo'>
                            <img data-test = "LogoIMG"src = {Logo} alt = "logo"/>
                    </div>
                </div>

        </header>
    )
}


export default Header;