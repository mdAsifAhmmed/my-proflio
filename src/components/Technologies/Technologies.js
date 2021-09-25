import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { BsTools } from 'react-icons/bs';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import Zoom from 'react-reveal/Zoom'
const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <Zoom>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I've worked with a range of technologies in the web development world. From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            JavaScript<br />
            React.js<br />
            Next.js<br />
            TailwindCss<br />
            material-ui<br />
            Redux<br />
            Bootstrap<br />
            Sasss<br />
            Html<br />
            Css
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BsTools size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Developer Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git<br/>
            Github<br/>
            Heroku<br/>
            Postman<br/>
            Vscode<br/>
            Netlify

          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    </Zoom>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
