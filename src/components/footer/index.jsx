import { createElement } from "react";
import {
    FaCodepen,
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaGlobe,
    FaLinkedin,
    FaYoutube,
    FaCoffee,
} from "react-icons/fa";
import { SiPatreon } from "react-icons/si";
import { Styled } from "./styled";

const links = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FaEnvelope },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaGlobe },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: SiPatreon },
];

const Footer = () => (
    <Styled.Wrapper>
        <Styled.Main>
            <Styled.Col>
                Copyright &copy; {new Date().getFullYear()}{" "}
                <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                    Ashish Ranjan
                </a>
            </Styled.Col>
            <Styled.Links aria-label="Social and support links">
                {links.map(({ label, href, icon }) => (
                    <a
                        key={label}
                        href={href}
                        target={href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        aria-label={label}
                        title={label}
                    >
                        {createElement(icon, { "aria-hidden": true })}
                    </a>
                ))}
            </Styled.Links>
        </Styled.Main>
    </Styled.Wrapper>
);

export default Footer;
