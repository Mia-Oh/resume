import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

// App.js

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  color: hsla(0,0%,0%,0.8);
  text-decoration: none;
  list-style: none;
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
  margin-bottom: 15px;
  padding-left: 8px;
  padding-bottom: 0;
  line-height: 1.05;
`;


// Stacks.jsx

export const SStackList = styled.li`
  padding: 5px 0;
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
  background-color: #f3f8f3;
  border: 1px solid #07ba9c;
  padding: 1px 13px;
  border-radius: 20px;
`;


// 공통

export const SContent = styled.div`
  /* border:1px solid black; */
  display:flex;
`;

export const SPeriodSection = styled.div`
  /* border:1px solid black; */
  width: 30%;
  
`;


export const SProjectInfoSection = styled.div`
  /* border:1px solid black; */
   width: 70%;
`;

export const SEducationInfoSection = styled.div`
   width: 70%;
`;

export const SExperienceInfoSection = styled.div`
  width: 70%;
`;
