import { SIntroLayout,STitleSection,SNameTitle,SSubTitleSection,STextList,SIconList } from "../style/style";

const Intro = () => {
  return (
    <SIntroLayout>
      <STitleSection>
        <SNameTitle>오송아</SNameTitle> 
        <p>Junior Frontend Developer</p>
      </STitleSection>
      <SSubTitleSection>
        <SIconList>
          <li>
            <a target="_blank" href="https://github.com/Mia-Oh" rel="noreferrer">
              <i className="fab fa-github" title="Github link"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/mia_day_6/" rel="noreferrer">
              <i className="fab fa-instagram" title="Instagram link"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.youtube.com/channel/UCUuepOw2r05kCFpZNCKpW6g" rel="noreferrer">
              <i className="fab fa-youtube" title="Youtube link"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://mia-mia.tistory.com/" rel="noreferrer">
              <i className="fas fa-globe" title="Blog link"></i>
            </a>
          </li>
          </SIconList>
          <STextList>
            <li>
              Email : 
              <a href="mailto:songmiaoh@gmail.com" target="_blank" rel="noreferrer">songmiaoh@gmail.com</a>
            </li>
            <li>Last updated : 2023.04.08</li>
          </STextList>
      </SSubTitleSection>
    </SIntroLayout>
  );
}
export default Intro;