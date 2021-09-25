import React, {useState} from 'react';

import { BlogCard, CardInfo, ExternalLinks,CheckOutGitHub,VisitGitHub, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Button from "react-reveal/Jump";
import Flip from "react-reveal/Flash";
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
    <Flip>
      {projects.map((p, i) => {
        return (
          <BlogCard  key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            {/* <CardInfo className="card-info">{p.description}</CardInfo> */}
            <div data-aos="fade-right">
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks target='_blank' href={p.visit}>Live</ExternalLinks>
              <ExternalLinks target='_blank' href={p.source}>Source Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
      </Flip>
    </GridContainer>
    <VisitGitHub>
    <Button>
    <CheckOutGitHub href="#">
    Check Out my GitHub
    </CheckOutGitHub>
    </Button>

    </VisitGitHub>


  </Section>
);

export default Projects;