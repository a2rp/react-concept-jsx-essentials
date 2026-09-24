import { useEffect, useState } from "react";
import { TbSunMoon } from "react-icons/tb";
import { Styled } from "./styled";

const THEME_KEY = "theme";

const getInitialTheme = () => {
    try {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === "light" || saved === "dark") return saved;
    } catch {
        return "dark";
    }

    return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const Header = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <Styled.Name>
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                    <span>JSX Essentials</span>
                </Styled.Name>
                <Styled.Theme
                    type="button"
                    className="themeToggle"
                    title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
                    aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
                    aria-pressed={theme === "light"}
                    onClick={() => setTheme((value) => (value === "light" ? "dark" : "light"))}
                >
                    <TbSunMoon className="icon" size={18} />
                </Styled.Theme>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
