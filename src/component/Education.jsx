import { SSubtitle, SContent,SPeriodSection,SEducationInfoSection } from "../style/style";



const Education = () => {
  return (
    <section>
      <SSubtitle>Education</SSubtitle>
      <SContent>
        <SPeriodSection>
          <span>2014.03 - 2017.02</span>
        </SPeriodSection>
        <SEducationInfoSection>
          <h3>한양여자대학교</h3>
          <span>스마트 IT과 (구, 정보경영과)</span>
        </SEducationInfoSection>
      </SContent>
      <SContent>
        <SPeriodSection>
          <span>2022.03 - 2023.02</span>
        </SPeriodSection>
        <SEducationInfoSection>
          <h3>국가평생교육진흥원</h3>
          <span>경영학 학사 </span>
        </SEducationInfoSection>
      </SContent>      
      <SContent>
        <SPeriodSection>
          <span>2022.10 - 2023.04</span>
        </SPeriodSection>
        <SEducationInfoSection>
          <h3>코드스테이츠(Code States) 소프트웨어 개발자 과정 </h3>
          <span>배운 내용을 스스로 요약해서 써보거나(추천), 코드스테이츠 커리큘럼 링크를 걸어두세요! </span>
          <ul>
            <li>20주 동안 매일 알고리즘 문제 풀이</li>
            <li>20주 동안 매일 강도 높은 과제 수행 및 페어 프로그래밍과 코드 리뷰 경험</li>
            <li>협업 프로젝트 2회 진행</li>
          </ul>
        </SEducationInfoSection>
      </SContent>
    </section>
  );
}

export default Education;