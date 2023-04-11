import { SSubtitle, SContent,SPeriodSection,SProjectInfoSection, SProjectList, SProjectDescription, SProjectTag } from "../style/style";



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
          <SProjectDescription>코드스테이츠 파이널 프로젝트 (6인/4주)</SProjectDescription>
          <SProjectTag>팀장</SProjectTag>
          <SProjectTag>프론트엔드</SProjectTag>
          <ul>
            <SProjectList>Header 컴포넌트, Login, 일반 회원가입, 의사 회원가입, Landing, 관리자 페이지 구현</SProjectList>
            <SProjectList>Access Token 과 Refresh Token을 통한 인증 처리</SProjectList>
            <SProjectList>카카오 지도 API</SProjectList>
            <SProjectList>Recoil 활용 상태 관리 로직 구현</SProjectList>
            <SProjectList>React.lazy와 suspense를 이용한 코드 분할</SProjectList>
            <SProjectList>클라이언트 셋팅 및 S3 정적 페이지 배포</SProjectList>
            <SProjectList>
              <a href="http://main-project-020.s3-website.ap-northeast-2.amazonaws.com/home/review">배포</a>
              <a href="http://main-project-020.s3-website.ap-northeast-2.amazonaws.com/home/review">Notion</a>
              <a href="http://main-project-020.s3-website.ap-northeast-2.amazonaws.com/home/review">GitHub</a>
              <a href="https://github.com/orgs/codestates-seb/projects/512/views/1">KANBAN Borad</a>
            </SProjectList>
          </ul>
        </SProjectInfoSection>
      </SContent>
    </section>
  );
}

export default Projects;