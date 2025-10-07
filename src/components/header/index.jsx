import React, { useEffect, useState } from 'react'
import { TbSunMoon } from 'react-icons/tb'
import { Styled } from './styled'

// --- Theme handling ---
const THEME_KEY = 'theme'; // 'dark' | 'light'
const getInitialTheme = () => {
    try {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === 'light' || saved === 'dark') return saved;
    } catch { }
    // fall back to OS preference
    if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark';
};


const Header = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch { }
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

    return (
        <>
            <Styled.Wrapper>
                <Styled.Main>
                    <Styled.Name>app-name</Styled.Name>
                    <Styled.Theme
                        className="themeToggle"
                        title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} theme`}
                        // role="button"
                        aria-pressed={theme === 'light' ? 'true' : 'false'}
                        onClick={toggleTheme}
                    >
                        <TbSunMoon className='icon' size={18} />
                    </Styled.Theme>

                </Styled.Main>
            </Styled.Wrapper>
        </>
    )
}

export default Header
