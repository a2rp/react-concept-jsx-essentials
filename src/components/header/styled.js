import styled from "styled-components";

/* ---- Design tokens via CSS vars ---- */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        inset: 0 0 auto 0; /* top:0; left:0; right:0 */
        height: 56px;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;

        background: var(--surface);
        color: var(--text);
        border-bottom: 1px solid var(--border);

        /* Premium-but-safe glassy feel */
        backdrop-filter: saturate(120%) blur(6px);
        -webkit-backdrop-filter: saturate(120%) blur(6px);
    `,
    Main: styled.div`
        width: 100%;
        max-width: var(--maxw);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        padding: 0 16px;
    `,
    Name: styled.div`
        font-family: "Antonio", sans-serif;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0.4px;
    `,
    Theme: styled.div`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
        transition: transform 120ms var(--easing),
            border-color 160ms var(--easing), background 160ms var(--easing),
            color 160ms var(--easing);

        &:hover {
            border-color: var(--accent);
            color: var(--accent);
        }
        &:active {
            transform: translateY(1px);
        }

        /* Icon sizing */
        svg {
            /* font-size: 18px; */
        }

        .icon {
            /* border: 1px solid #f00; */
            /* font-size: 32px; */
            /* width: 32px; */
        }

        &.themeToggle {
            /* font-size: 200px; */
            cursor: pointer;
            color: ${muted};
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 8px;
            border: 1px solid ${border};
            transition: 0.2s ease;
        }
        &.themeToggle:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
