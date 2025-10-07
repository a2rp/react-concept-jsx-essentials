import styled from "styled-components";

/* App shell consumes global CSS variables from index.css:
   --bg, --text, --card, --surface, --border, --maxw, --radius, --shadow, --easing */
export const Styled = {
    Wrapper: styled.div`
        background: var(--bg);
        color: var(--text);
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
    `,
    Main: styled.main`
        /* Keep content readable below a fixed header (56px) */
        padding: 72px 16px 16px; /* 56px header + 16px gap */
        width: 100%;
        min-height: 100vh;

        /* Inner direct child can be a page container */
        > * {
            width: 100%;
            max-width: var(--maxw);
        }
    `,
    Header: styled.div``,
    Footer: styled.div``,
};
