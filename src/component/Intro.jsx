import { SIntroLayout,STitleSection,SNameTitle,SSubTitleSection,STextList,SIconList, SIconItem, SIconSvg, SAnchor } from "../style/style";

const Intro = () => {
  return (
    <SIntroLayout>
      <STitleSection>
        <SNameTitle>오송아</SNameTitle> 
        <p>Junior Frontend Developer</p>
      </STitleSection>
      <SSubTitleSection>
        <SIconList>
          <SIconItem>
            <a target="_blank" href="https://github.com/Mia-Oh" rel="noreferrer">
              <SIconSvg className="fab fa-github" title="Github link"></SIconSvg>
            </a>
          </SIconItem>
          <SIconItem>
            <a target="_blank" href="https://mia-mia.tistory.com/" rel="noreferrer">
              <SIconSvg className="fas fa-globe" title="Blog link"></SIconSvg>
            </a>
          </SIconItem>
          <SIconItem>
            <a target="_blank" href="https://www.youtube.com/channel/UCUuepOw2r05kCFpZNCKpW6g" rel="noreferrer">
              <SIconSvg className="fab fa-youtube" title="Youtube link"></SIconSvg>
            </a>
          </SIconItem>
          <SIconItem>
            <a target="_blank" href="https://www.instagram.com/mia_day_6/" rel="noreferrer">
              <SIconSvg className="fab fa-instagram" title="Instagram link"></SIconSvg> 
            </a>
          </SIconItem>
          </SIconList>
          <STextList>
            <li>
              Email : 
              <SAnchor href="mailto:songmiaoh@gmail.com" target="_blank" rel="noreferrer">songmiaoh@gmail.com</SAnchor>
            </li>
            <li>Last updated : 2023.04.08</li>
          </STextList>
      </SSubTitleSection>
    </SIntroLayout>
  );
}
export default Intro;