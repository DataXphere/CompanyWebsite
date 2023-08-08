import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Cross-Functional Teams'},
  { number: 2, text: 'Smart-Contract Projects', },
  { number: 3, text: 'RPA Projects ', },
  { number: 4, text: '', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Company Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
