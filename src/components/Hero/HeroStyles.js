import styled from 'styled-components';

export const TimeLineStylesSpan = styled.p`
  font-weight: 500;
  font-size: ${(props) => props.main ? '45px' : '36px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  ${'' /* max-width: 100%; */}
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${'' /* margin-bottom: 16px; */}
  ${'' /* padding: ${(props) => props.main ? '58px 0 16px' : '0'}; */}
  display:flex;
  align-items: baseline;
`;
export const TimeLineStylesMiniText= styled.p`
  max-width: 800px;
  width: fit-content;
  font-size: 24px;
  ${'' /* line-height: 40px; */}
  font-weight: 300;
  ${'' /* padding-bottom: 3.6rem; */}
  color: rgba(255, 255, 255, 0.5);
`;
// export const TimeLineStylesPeren = styled.div`
// display:flex;
// `;
export const LeftSection = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content: center;
    height: 82vh;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    height:auto !important;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
