import React from 'react'
import { Styled } from './styled'

const Footer = () => {
    return (
        <>
            <Styled.Wrapper>
                <Styled.Main>
                    <Styled.Col>&copy; {new Date().getFullYear()}</Styled.Col>
                    <Styled.Col>
                        By <a
                            href="https://www.ashishranjan.net"
                            target='_blank'
                        >Ashish Ranjan</a>
                    </Styled.Col>
                </Styled.Main>
            </Styled.Wrapper>
        </>
    )
}

export default Footer

