import styled from "styled-components";

const SContent = styled.div`
  /* border:1px solid black; */
  display:flex;
`;

const SPeriodSection = styled.div`
  /* border:1px solid black; */
  
`;

const SProjectInfoSection = styled.div`
  /* border:1px solid black; */
  
`;

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <SContent>
        <SPeriodSection>
          <span>2023.02 - 2023.03</span>
        </SPeriodSection>
        <SProjectInfoSection>
          <h3>다나아 : 의료 정보 커뮤니티</h3>
          <span>코드스테이츠 파이널 프로젝트 (6인/4주)</span>
          <span>[팀장, 프론트엔드] (6인/4주)</span>
          <ul>
            <li>내가 개발한 내용</li>
            <li>내가 개발한 내용</li>
            <li>내가 개발한 내용</li>
          </ul>
        </SProjectInfoSection>
      </SContent>
    </section>
  );
}

export default Projects;