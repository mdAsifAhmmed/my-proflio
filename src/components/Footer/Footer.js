import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiUpwork } from 'react-icons/si';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import Zoom from 'react-reveal/Zoom'
import Fede from 'react-reveal/Bounce'
const Footer = () => {
  return (
    <FooterWrapper>
    <Fede>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+880 017-9889-2867">+880 0179-8892-867</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="">
          mdasifahmmedofficial@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      </Fede>
      <Zoom>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Made by  Md Asif Ahmed</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons target='_blank' href="https://github.com/mdAsifAhmmed">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target='_blank' href="https://www.linkedin.com/in/md-asif-ahmed-68162a200/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target='_blank' href="https://www.upwork.com/freelancers/~01844d464eed86d1ff">
          <SiUpwork size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      </Zoom>

    </FooterWrapper>
  );
};

export default Footer;
