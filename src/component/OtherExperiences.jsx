import { SAnchor, SAnchorColor, SContentColumn, SOtherHeading, SOtherPeriod, SParagraph, SSubtitle } from "../style/style";

const OtherExperiences = () => {
  return (
    <section>
      <SSubtitle>Other Experiences</SSubtitle>
      <SContentColumn>
          <SOtherHeading>Blog</SOtherHeading>
          <SOtherPeriod>2022.10 - 현재</SOtherPeriod>
          <SParagraph>
            <SAnchorColor href="https://mia-mia.tistory.com/" target="_blank">'오히려 좋아'</SAnchorColor> 
            라는 블로그를 운영하며 학습하게 된 기술을 글로 작성해 공유합니다.
            </SParagraph> 
          <SParagraph>티스토리 블로그로 스킨을 편집하여 사용하고 있습니다.</SParagraph>
          <SParagraph>이전에는 
            <SAnchor href="https://blog.naver.com/mia4956/222821182781" target="_blank">'Mia Mia'</SAnchor> 
          라는 네이버 블로그를 운영하였습니다.</SParagraph>
      </SContentColumn>
      <SContentColumn>
        <SOtherHeading>YouTube</SOtherHeading>
        <SOtherPeriod>2021.9 - 현재</SOtherPeriod>
          <SParagraph>
            <SAnchorColor href="https://www.youtube.com/@miatube3164/featured" target="_blank">'밍튜브 Mia Tube'</SAnchorColor> 
          라는 이름의 유튜브 채널을 운영하고 있습니다.</SParagraph> 
          <SParagraph>동영상 콘텐츠를 더 선호하는 소비자 비율은 빠르게 성장하며 소비자 경험이 중요한 프런트엔드 개발자는</SParagraph>
          <SParagraph>이 사실에서 자유로울 수 없다고 합니다.</SParagraph>
          <SParagraph>직접 유튜브 채널을 운영해 보는 것은 좋은 경험과 취미 모두 되어 주고 있습니다.</SParagraph>
      </SContentColumn>
    </section>
  );
};

export default OtherExperiences;