import { SSubtitle, SContent,SPeriodSection,SEducationInfoSection, SEducationDescription } from "../style/style";



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
          <ul>  
            <li>변수,Scope, 고차함수, 비동기 등 JavaScript 기초 개념 습득</li>
            <li>20주 동안 매일 알고리즘 문제 풀이</li>
            <li>20주 동안 매일 강도 높은 과제 수행 및 페어 프로그래밍과 코드 리뷰 경험</li>
            <li>협업 프로젝트 2회 진행</li>
            <li>
              <a href="https://www.codestates.com/course/frontend-engineering">커리큘럼 </a>
              <a href="https://mia-mia.tistory.com/category/%F0%9F%8D%80%20study%20log/weekly">Daily log</a>
            </li>
          </ul>
        </SEducationInfoSection>
      </SContent>
    </section>
  );
}

export default Education;