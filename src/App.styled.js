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
        padding: 0 16px 16px; /* 56px header + 16px gap */
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
    GoToTop: styled.button`
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 20;
        display: grid;
        width: 44px;
        height: 44px;
        place-items: center;
        border: 1px solid var(--border);
        border-radius: 50%;
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow);
        cursor: pointer;
        transition: color 0.2s var(--easing), border-color 0.2s var(--easing),
            box-shadow 0.2s var(--easing), transform 0.2s var(--easing);

        &:hover,
        &:focus-visible {
            border-color: var(--accent);
            color: var(--accent);
            box-shadow: 0 0 14px var(--accent-soft);
            transform: translateY(-2px);
            outline: none;
        }

        svg {
            width: 18px;
            height: 18px;
        }

        @media (max-width: 640px) {
            right: 16px;
            bottom: 16px;
        }
    `,
};
