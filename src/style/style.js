import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

//* App.js

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Pretendard,-apple-system,BlinkMacSystemFont,Bazier Square,Noto Sans KR,Segoe UI,Apple SD Gothic Neo,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;  color: hsla(0,0%,0%,0.8);
  text-decoration: none;
  /* list-style: none; */
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
  /* border: 1px solid black; */
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
  a {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  i {
  font-size: 30px;
  line-height: 60px;
  }
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



//* Stacks.jsx

export const SStackList = styled.li`
  padding: 5px 0;
  list-style: none;
`;

export const SStackCategory = styled.span`
  padding-right: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const SStackItem = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  background-color: rgb(243 248 243 / 30%);
  border: 1px solid #07ba9c;
  padding: 5px 15px;
  border-radius: 20px;
`;


//* 공통

export const SContent = styled.div`
  /* border:1px solid black; */
  display:flex;
  padding-bottom: 5rem;
`;

export const SPeriodSection = styled.div`
  /* border:1px solid black; */
  width: 45%;
  h3 {
    font-size:1.25rem;
    padding-bottom: 1rem;
  }
`;


export const SProjectInfoSection = styled.div`
  /* border:1px solid black; */
   width: 65%;
   span {
    font-size: 1rem;
   }
`;

export const SProjectList = styled.li`
`;

export const SEducationInfoSection = styled.div`
   width: 65%;
`;

export const SExperienceInfoSection = styled.div`
  width: 65%;
`;
