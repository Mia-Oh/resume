import { SSubtitle, SContent,SPeriodSection,SEducationInfoSection, SEducationDescription, SEduLinkSection, SAnchor } from "../style/style";
import { FcBrokenLink } from 'react-icons/fc';


const Education = () => {
  return (
    <section>
      <SSubtitle>Education</SSubtitle>
      <SContent>
        <SPeriodSection>
          <h3>한양여자대학교</h3>
          <span>2014.03 - 2017.02</span>
        </SPeriodSection>
        <SEducationInfoSection>
          <SEducationDescription>스마트 IT과 (구) 정보경영과</SEducationDescription>
        </SEducationInfoSection>
      </SContent>
      <SContent>
        <SPeriodSection>
          <h3>국가평생교육진흥원</h3>
          <span>2022.03 - 2023.02</span>
        </SPeriodSection>
        <SEducationInfoSection>
          <SEducationDescription>경영학 학사 </SEducationDescription>
        </SEducationInfoSection>
      </SContent>      
      <SContent>
        <SPeriodSection>
          <h3>코드스테이츠(Code States)<br /> 소프트웨어 개발자 과정 </h3>
          <span>2022.10 - 2023.04</span>
        </SPeriodSection>
        <SEducationInfoSection>
          <SEducationDescription>기초지식을 기반한 사용자 친화적 웹 서비스 개발</SEducationDescription>
          <SEduLinkSection>
            <FcBrokenLink />
            <a href="https://mia-mia.tistory.com/category/%F0%9F%8D%80%20study%20log/weekly" target="_blank" rel="noreferrer">매일 기록</a>|
            <a href="https://www.codestates.com/course/frontend-engineering#curriculum" target="_blank" rel="noreferrer">공식 커리큘럼</a>
          </SEduLinkSection>
          <ul>  
            <li>Scope, 고차함수, 비동기 등 JavaScript 기초 개념 습득</li>
            <li>SPA, State, Props 등 React 기초 개념 습득</li>
            <li>20주 매일 과제 수행 및 페어 프로그래밍, 코드 리뷰 경험</li>
            <li>json-server를 통한 REST API 서버 구축 및 LocalStoreage를 활용한
              <SAnchor href="https://mia-oh.github.io/TodoListApp-You-do-You-want/index.html" target="_blank">솔로 프로젝트</SAnchor>            
            </li>
            <li>협업 프로젝트 2회 진행</li>
          </ul>
        </SEducationInfoSection>
      </SContent>
    </section>
  );
}

export default Education;