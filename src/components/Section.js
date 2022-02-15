import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal';

function Section({ title, backgroundImg, description, lftBtnText, rtBtnText }) {
  return (
    <Wrap bgImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{lftBtnText}</LeftButton>
            {rtBtnText && <RightButton>{rtBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow src='/images/down-arrow.svg' />
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: orange;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/images/' + {bgImg});
  display: flex;
  flex-direction: column;
  justify-content: space-between; // vertical alignment
  align-items: center; // horizontal alignment
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
