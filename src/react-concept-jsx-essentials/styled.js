import styled from "styled-components";

/* Tokens from global CSS variables */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const surface = "var(--surface, #0f141b)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";
const radius = "var(--radius, 16px)";
const maxw = "var(--maxw, 1440px)";
const easing = "var(--easing, cubic-bezier(0.2,0.8,0.2,1))";

export const Styled = {
    Page: styled.div`
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column; /* stack sections vertically */
        align-items: center;
        color: ${text};
        background: ${bg};
        padding: 72px 16px 32px; /* give room for fixed header */
        overflow-x: hidden; /* kill accidental horizontal scroll */
    `,

    Title: styled.h1`
        width: 100%;
        max-width: ${maxw};
        margin: 0 auto 6px auto;
        letter-spacing: 0.5px;
    `,
    Subtitle: styled.p`
        width: 100%;
        max-width: ${maxw};
        margin: 0 auto 16px auto;
        color: ${muted};
    `,

    Section: styled.section`
        width: 100%;
        max-width: ${maxw};
        margin: 0 auto 16px auto;
        background: ${surface};
        border: 1px solid ${border};
        border-radius: ${radius};
        box-shadow: ${shadow};
        padding: 16px;
    `,
    H3: styled.h3`
        margin: 0 0 8px 0;
        letter-spacing: 0.4px;
    `,
    H4: styled.h4`
        margin: 0 0 8px 0;
    `,
    Small: styled.p`
        margin: 0 0 8px 0;
        font-size: 12px;
        color: ${muted};
    `,

    Row: styled.div`
        display: grid;
        /* responsive cards that wrap (no overflow) */
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 16px;
        margin-top: 8px;
    `,

    RowItem: styled.div`
        display: grid;
        grid-template-columns: 160px 1fr;
        align-items: center;
        gap: 10px;
        padding: 10px 0;
        border-bottom: 1px dashed ${border};
        &:last-child {
            border-bottom: 0;
        }
        @media (max-width: 520px) {
            grid-template-columns: 1fr;
            gap: 8px;
        }
        input {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 8px 10px;
            font-size: 13px;
            width: 100%;
            transition: border-color 0.2s ${easing}, box-shadow 0.2s ${easing};
        }
        input:focus {
            border-color: ${accent};
            outline: 0;
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    Card: styled.div`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 12px;
    `,

    Panel: styled.div`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 12px;
        display: grid;
        gap: 8px;
    `,

    Badge: styled.span`
        display: inline-block;
        padding: 3px 8px;
        border-radius: 999px;
        font-size: 12px;
        line-height: 1;
        background: ${({ ["data-tone"]: tone }) =>
            tone === "success"
                ? "rgba(34,197,94,.15)"
                : tone === "danger"
                ? "rgba(239,68,68,.15)"
                : tone === "warning"
                ? "rgba(245,158,11,.15)"
                : "rgba(90,169,255,.18)"};
        color: ${({ ["data-tone"]: tone }) =>
            tone === "success"
                ? "#86efac"
                : tone === "danger"
                ? "#fca5a5"
                : tone === "warning"
                ? "#fdba74"
                : "#b3d8ff"};
        border: 1px solid ${border};
    `,

    List: styled.ul`
        padding-left: 18px;
        li {
            margin: 6px 0;
        }
        code {
            background: ${card};
            padding: 2px 6px;
            border-radius: 6px;
            border: 1px solid ${border};
            word-break: break-word;
            overflow-wrap: anywhere;
        }
    `,

    Button: styled.button`
        appearance: none;
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        border-radius: 10px;
        padding: 8px 12px;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.12s ${easing}, border-color 0.16s ${easing},
            color 0.16s ${easing}, background 0.16s ${easing},
            box-shadow 0.16s ${easing};
        &:hover {
            border-color: ${accent};
            color: ${accent};
        }
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            outline: 0;
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        &[data-variant="danger"] {
            border-color: #ef4444;
            color: #ef9a9a;
        }
        &[data-variant="ghost"] {
            background: transparent;
        }
        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,
    BtnRow: styled.div`
        display: flex;
        gap: 8px;
        margin-top: 8px;
        flex-wrap: wrap;
    `,

    Note: styled.p`
        margin: 10px 0 0 0;
        padding: 8px 10px;
        border-radius: 10px;
        background: ${card};
        border: 1px dashed ${border};
        color: ${({ tone }) => (tone === "danger" ? "#fca5a5" : muted)};
    `,

    Code: styled.pre`
        margin-top: 10px;
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 12px;
        font-size: 12px;
        line-height: 1.6;
        overflow: auto;
        code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
    `,
};
