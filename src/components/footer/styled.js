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
        gap: 24px;
        padding: 16px;
    `,
    Col: styled.div`
        a {
            color: var(--muted);
            text-decoration: none;
            border-bottom: 1px dashed transparent;
            transition: color 0.2s var(--easing),
                border-color 0.2s var(--easing);
        }
        a:hover {
            color: var(--accent);
            border-color: var(--accent);
        }
    `,
};
