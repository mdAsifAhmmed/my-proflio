import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection,TimeLineStylesSpan,TimeLineStylesMiniText,TimeLineStylesPeren } from './HeroStyles';
import Fede from 'react-reveal/Bounce'
const Hero = (props) => (
  <Fede>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle mein>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        {/* <TimeLineStylesPeren> */}
        
        <TimeLineStylesSpan><TimeLineStylesMiniText>Hello Dear,</TimeLineStylesMiniText>I'm Md Asif Ahmed<TimeLineStylesMiniText>.Passionate Programmer.</TimeLineStylesMiniText></TimeLineStylesSpan>
        
        {/* </TimeLineStylesPeren> */}

          
     
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </Fede>
);

export default Hero;