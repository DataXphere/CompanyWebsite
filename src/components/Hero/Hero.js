import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        At DataXphere LLC, <br />
        our mission is to revolutionize the digital landscape with innovative and data-driven solutions.
        </SectionTitle>
        <SectionText>
        We empower businesses and individuals to thrive by developing cutting-edge technologies that drive positive impact and transformation across various sectors.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;