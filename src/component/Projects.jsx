import { SSubtitle, SContent,SPeriodSection,SProjectInfoSection, SProjectList } from "../style/style";



const Projects = () => {
  return (
    <section>
      <SSubtitle>Projects</SSubtitle>
      <SContent>
        <SPeriodSection>
          <h3>다나아 : 의료 정보 커뮤니티</h3>
          <span>2023.02 - 2023.03</span>
        </SPeriodSection>
        <SProjectInfoSection>
          <span>코드스테이츠 파이널 프로젝트 (6인/4주)</span><br/>
          <span>[팀장, 프론트엔드]</span>
          <ul>
            <SProjectList>Header 컴포넌트, Login, 일반 회원가입, 의사 회원가입 페이지, 랜딩 페이지, 관리자 페이지 구현</SProjectList>
            <SProjectList>Access Token 과 Refresh Token을 통한 인증 처리</SProjectList>
            <SProjectList>카카오 지도 컴포넌트 제작 구현</SProjectList>
            <SProjectList>로그인 여부, 유저 정보 상태 관리 로직 구현</SProjectList>
            <SProjectList>React.lazy와 suspense를 이용한 코드 분할</SProjectList>
            <SProjectList>클라이언트 셋팅 및 S3 정적 페이지 배포</SProjectList>
          </ul>
        </SProjectInfoSection>
      </SContent>
    </section>
  );
}

export default Projects;