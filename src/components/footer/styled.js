import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--surface);
        color: var(--muted);
        border-top: 1px solid var(--border);
    `,
    Main: styled.div`
        width: 100%;
        max-width: var(--maxw);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px;
        @media (max-width: 640px) {
            flex-direction: column;
            text-align: center;
        }
    `,
    Col: styled.div`
        a {
            color: var(--muted);
            text-decoration: none;
            transition: color 0.2s var(--easing), text-shadow 0.2s var(--easing);
            &:hover,
            &:focus-visible {
                color: var(--accent);
                text-shadow: 0 0 10px var(--accent-soft);
            }
        }
    `,
    Links: styled.nav`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 8px;
        a {
            width: 32px;
            height: 32px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--muted);
            border: 1px solid var(--border);
            border-radius: 8px;
            transition: color 0.2s var(--easing), border-color 0.2s var(--easing),
                box-shadow 0.2s var(--easing);
            &:hover,
            &:focus-visible {
                color: var(--accent);
                border-color: var(--accent);
                box-shadow: 0 0 12px var(--accent-soft);
            }
        }
    `,
};
