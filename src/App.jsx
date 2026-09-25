import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Styled } from "./App.styled";
import Footer from "./components/footer";
import Header from "./components/header";
import JSXEssentials from "./react-concept-jsx-essentials";

const App = () => {
    const [showGoTop, setShowGoTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowGoTop(window.scrollY > 420);

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Styled.Wrapper>
            <Styled.Header><Header /></Styled.Header>
            <Styled.Main>
                <JSXEssentials />
            </Styled.Main>
            <Styled.Footer><Footer /></Styled.Footer>
            {showGoTop && <Styled.GoToTop type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Go to top" title="Go to top"><FiArrowUp /></Styled.GoToTop>}
        </Styled.Wrapper>
    );
};

export default App;