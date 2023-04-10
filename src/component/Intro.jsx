import styled from 'styled-components';

const SIntroLayout = styled.section`
  display: flex;
  justify-content: space-between;
`;

const STitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 66%;
`;

const SNameTitle = styled.h1`
  font-size: 2.5rem;
`;

const SSubTitle = styled.div`
  width: 33%;
`;

const SIconList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  a {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  i {
  font-size: 30px;
  line-height: 60px;
  }
`;

const STextList = styled.ul`
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
`;

const Intro = () => {
  return (
    <SIntroLayout>
      <STitleSection>
        <SNameTitle>오송아</SNameTitle> 
        <p>Junior Frontend Developer</p>
      </STitleSection>
      <SSubTitle>
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
              <a href="songmiaoh@gmail.com" target="_blank">songmiaoh@gmail.com</a>
            </li>
            <li>Last updated : 2023.04.08</li>
          </STextList>
      </SSubTitle>
    </SIntroLayout>
  );
}
export default Intro;