import { createGlobalStyle, keyframes } from "styled-components";
import styled from 'styled-components';

//* App.js

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Pretendard,-apple-system,BlinkMacSystemFont,Bazier Square,Noto Sans KR,Segoe UI,Apple SD Gothic Neo,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;  color: hsla(0,0%,0%,0.8);
  text-decoration: none;
}
#root {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}
section {
  margin: 0 30px;
  padding: 3rem 0 ;
}
::marker {
  color: #0fe543;
  font-size: 5px;  
}
::selection {
  background: rgba(15, 229, 67, 0.5);
}
`;

export const SLayout = styled.main`
  width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


export const SSubtitle = styled.h2`
  font-size: 1.8rem;
  border-left: 12px solid #0fe543; 
  margin-bottom: 2.5rem;
  padding-left: 8px;
  padding-bottom: 0;
  line-height: 1.05;
`;

//* Intro.jsx

export const SIntroLayout = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const STitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 66%;
`;

export const SNameTitle = styled.h1`
  font-size: 2.5rem;
  padding-bottom: 1rem;
`;

export const SSubTitleSection = styled.div`
  width: 33%;
`;

export const SIconList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
  margin: 0 0 1rem 0;

  a {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const sizeUp = keyframes`
  from {
    background-color:  #fff;
  }
  to {
    background-color:  rgb(15, 229, 67);
  }
`;

export const SIconItem = styled.li`
  border: 1px solid rgb(0 0 0 / 5%);
  border-radius: 50px;
  margin-right: 10px;
  box-shadow: rgb(230 230 230) 3px 2px;
  position: relative;
  :last-child {
    margin-right: 0;
  };
  a {
    width: 60px;
    height: 60px;
    color: #fff;
  }
  a::before {
    content: '';
    width: 60px;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50px;
    z-index: -1;
    background-color: #fff;
  }
  :hover {
    border: 1px solid rgb(0 0 0 / 0%);
    border-radius: 50px;
    background-color:  rgb(15, 229, 67);
    animation : ${sizeUp} 0.25s ease-in-out forwards;
    i {
      color: #fff;
    }
  }
`;

export const SIconSvg = styled.i`
  font-size: 30px;
  line-height: 60px;
`;

export const STextList = styled.ul`
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  li {
    list-style: none;
    padding: 5px 0;
  }
`;

export const SAboutMeP = styled.p`
  font-size: 1.1rem;
  line-height: 2rem;
`;


//* Stacks.jsx

export const SStackList = styled.li`
  padding: 0.5rem 0;
  list-style: none;
`;

export const SStackCategory = styled.span`
  padding-right: 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const SStackItem = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.75rem;
  background-color: rgb(243 248 243 / 30%);
  border: 1px solid #07ba9c;
  padding: 5px 15px;
  border-radius: 20px;
  box-shadow: rgb(230 230 230) 3px 2px;
  font-weight: 500;  
`;


//* 공통

export const SContent = styled.div`
  display:flex;
  padding-bottom: 4rem;
`;

export const SContentColumn = styled.div`
  display:flex;
  flex-direction: column;
  padding-bottom: 4rem;
`;

export const SPeriodSection = styled.div`
  width: 45%;
  h3 {
    font-size:1.35rem;
    padding-bottom: 1rem;
  }
`;

export const SAnchorColor = styled.a`
  color : blue;
  padding: 0 0.3rem 0 0;
  :hover {
      text-decoration: underline;
  }
`;

export const SAnchor = styled.a`
  color : blue;
  padding: 0 0.3rem;
  :hover {
      text-decoration: underline;
  }
`;


export const SParagraph = styled.p`
  padding-bottom: 0.5rem;
`;

//* Project.jsx

export const SProjectInfoSection = styled.div`
   width: 65%;
   ul {
    margin: 0.5rem 0 0 1rem;
    line-height: 2.2rem;
   }
`;

export const SProjectDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
`;

export const SProjectLinkSection = styled.div`
  /* border: 1px solid; */
  display: flex;
  align-items: center;
  margin: 1rem 0 0.5rem 0;
  a {
    padding: 0 0.5rem;
    color : blue;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const SProjectTag = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0.5rem 0.5rem 0.5rem 0;
  background-color: rgb(15 229 67 / 15%);
  box-shadow: rgb(230 230 230) 3px 2px;  
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 500;
`;

export const SProjectList = styled.li`
`;

//* Eduaction.jsx

export const SEducationInfoSection = styled.div`
   width: 65%;
    ul {
    margin: 0.5rem 0 0 1rem;
    line-height: 2.2rem;
   }
`;

export const SEduLinkSection = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 1rem 0;
  a {
    padding: 0 0.5rem;
    color : blue;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const SEducationDescription = styled(SProjectDescription)`
  font-weight: 500;
`;

export const SExperienceDescription = styled(SProjectDescription)`
  font-weight: 500;
`;


export const SExperienceInfoSection = styled.div`
  width: 65%;
`;

export const SOtherHeading = styled.h3`
  font-size: 1.35rem;
  padding-bottom: 1rem;
`;

export const SOtherPeriod = styled.span`
  padding-bottom: 1rem;
`;

export const SFooterLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 3rem 0;
  }
  a {
    color: blue;
    padding: 0 0 0 0.1rem;
  }
`;