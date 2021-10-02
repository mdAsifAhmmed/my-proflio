import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:150px !important;
  object-fit: cover;
  overflow: hidden;
`
export const VisitGitHub = styled.div`
width:100%;
display: flex !important;
justify-content: center;
    height: 70px;
    align-items: center;
    margin:30px 0;
  
`;

export const GridContainer = styled.section`
display: flex;
${'' /* grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem; */}
flex-wrap:wrap;
justify-content:space-around;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  ${'' /* box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5); */}
  box-shadow: 3px 3px 20px rgb(255 255 255 /8%);
  text-align: center;
  width: 300px;
    overflow: hidden;
    margin: 20px 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:.7rem 1.5rem;
border-radius: 65px;
transition: 0.5s;
width:80%;
background: linear-gradient(
270deg,#13ADC7 0%,#945DD6 100%);
border:2px solid #0c1624;
&:hover{
  ${'' /* background:  linear-gradient(
270deg,#13ADC7 100%,#945DD6 100%); */}
${'' /* background: transparent; */}
color:#fff;
${'' /* border:2px solid #13ADC7; */}
}
`;
export const CheckOutGitHub = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 2rem;
border-radius: 65px;
transition: 0.5s;
background: linear-gradient(
270deg,#13ADC7 0%,#945DD6 100%);
border:2px solid #0c1624;
&:hover{
  ${'' /* background:  linear-gradient(
270deg,#13ADC7 100%,#945DD6 100%); */}
${'' /* background: transparent; */}
color:#fff;
${'' /* border:2px solid #13ADC7; */}
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`