import { useEffect, useState } from 'react';
import './Header.css'

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect( () => {
        const onScrolled = () => {
            setScrolled(window.scrollY > 0);
        }

        window.addEventListener('scroll', onScrolled);

        return () => window.removeEventListener('scroll', onScrolled);
    }, []); 

    return(
        <header className={`d-flex justify-content-around align-items-center ${scrolled?'scrolled':''}`}>
            <div className="header-brand d-flex align-items-center">
                <img className='logo-brand' src="/brand-logo.svg" alt="brand-logo" />
                <h1 className='momo-trust-display-regular'>Movies DB</h1>
            </div>
            <div className='header-navigate'>
                <ul className='d-flex align-items-center'>
                    <li><a href="#">MOVIE</a></li>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">TV SHOW</a></li>
                    <li><a href="#">WEB SERIES</a></li>
                    <li><a href="#">PRICING</a></li>
                </ul>
            </div>
            <div className='user-active d-flex gap-4'>
                <button className='search-btn'>
                    <img className='search-icon' src="/search-icon.svg" alt="" />
                </button>
                <div className='language-select d-flex gap-2'>
                    <img className='language-icon' src="/earth-icon.svg" alt="" />
                    <select className='language-selector' name="" id="">
                        <option value="EN" checked>EN</option>
                        <option value="VI">VI</option>
                    </select>
                </div>
                <button className='sign-in-btn'>SIGN IN</button>
            </div>

        </header>
    );
}