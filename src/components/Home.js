import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online Touchless Delivery'
        backgroundImg='model-s.jpg'
        lftBtnText='Custom oder'
        rtBtnText='Existing Inverntory'
      />
      <Section
        title='Model Y'
        description='Order Online Touchless Delivery'
        backgroundImg='model-y.jpg'
        lftBtnText='Custom oder'
        rtBtnText='Existing Inverntory'
      />
      <Section
        title='Model X'
        description='Order Online Touchless Delivery'
        backgroundImg='model-x.jpg'
        lftBtnText='Custom oder'
        rtBtnText='Existing Inverntory'
      />
      <Section
        title='Model 3'
        description='Order Online Touchless Delivery'
        backgroundImg='model-3.jpg'
        lftBtnText='Custom oder'
        rtBtnText='Existing Inverntory'
      />
      <Section
        title='Lowest Cost Solar Panels in America'
        description='Money back Guarantee'
        backgroundImg='solar-panel.jpg'
        lftBtnText='oder now'
        rtBtnText='learn more'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Costs Less Than a New Roof plus Solar Panels'
        backgroundImg='solar-roof.jpg'
        lftBtnText='Order now'
        rtBtnText='Learn More '
      />
      <Section
        title='Accessories'
        description='Order Online Touchless Delivery'
        backgroundImg='accessories.jpg'
        lftBtnText='shop now'
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
