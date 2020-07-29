import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { rhythm, scale } from "../utils/typography"

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
`;

const Overlay = styled.div`
  width: 80%;
  text-align: center;
  margin: 0px auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const PostTitleGroup = styled.div`
  display: flex;
  background-color: black;
  color: white;
  top: 90vh;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 18vh};
  flex-direction: column;
  padding: 4vh 5vw;
`;

const PageTitle = styled.h1`
  display: flex;
  font-size: ${rhythm(0.8)};
  margin-top: ${rhythm(0.5)};
  margin-bottom: ${rhythm(0.1)};
`;

const Subtitle = styled.p`
  display: flex;
  font-size: ${rhythm(0.6)};
  margin-bottom: ${rhythm(0.25)};
`;

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 82vh};

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: ${(props) => props.fit || 'cover'} !important;
    object-position: ${'0% 0%'} !important;
    font-family: 'object-fit: ${(props) => props.fit || 'cover'} !important; object-position: ${(
    props,
) => props.position || '50% 50%'} !important;'
  }
`;

function Hero(props) {
    const { children, fluid, postTitle, pageTitle } = props;
    return (
        <Container>
            <BgImage fluid={fluid}>
              <Overlay>{children}</Overlay>
            </BgImage>
            <PostTitleGroup>
                <PageTitle>
                    {postTitle}
                </PageTitle>
                <Subtitle>
                    {pageTitle}
                </Subtitle>
            </PostTitleGroup>
        </Container>
    );
}

export default Hero;