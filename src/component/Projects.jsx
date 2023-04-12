import { SSubtitle, SContent,SPeriodSection,SProjectInfoSection, SProjectList, SProjectDescription, SProjectTag, SProjectLinkSection } from "../style/style";
import { FcBrokenLink } from 'react-icons/fc';


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
          <SProjectLinkSection>
            <FcBrokenLink />
            <a href="http://main-project-020.s3-website.ap-northeast-2.amazonaws.com/" target="_blank" rel="noreferrer">Link</a>|
            <a href="https://www.notion.so/codestates/81e58968542c41b79adf7be2d4433768" target="_blank" rel="noreferrer">Notion</a>|
            <a href="https://github.com/codestates-seb/seb42_main_020" target="_blank" rel="noreferrer">GitHub</a>|
            <a href="https://www.youtube.com/watch?v=0h-MSy6-j9M"target="_blank" rel="noreferrer">Presentation</a>|
            <a href="https://mia-mia.tistory.com/tag/main-project"target="_blank" rel="noreferrer">Dev's log</a>
          </SProjectLinkSection>
          <SProjectTag>팀장</SProjectTag>
          <SProjectTag>프론트엔드</SProjectTag>
          <ul>
            <SProjectList>Header 컴포넌트, Login, 일반 회원가입, 의사 회원가입, Landing, 관리자 페이지 구현</SProjectList>
            <SProjectList>Access Token 과 Refresh Token을 통한 인증 처리</SProjectList>
            <SProjectList>카카오 지도 API</SProjectList>
            <SProjectList>Recoil 활용 상태 관리 로직 구현</SProjectList>
            <SProjectList>React.lazy와 suspense를 이용한 코드 분할</SProjectList>
            <SProjectList>클라이언트 셋팅 및 S3 정적 페이지 배포</SProjectList>
          </ul>
        </SProjectInfoSection>
      </SContent>
    </section>
  );
}

export default Projects;