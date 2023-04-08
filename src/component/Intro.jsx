import styled from 'styled-components';

const SIntroLayout = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const STitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 66%;
`;

const SSubTitle = styled.div`
  width: 33%;
`;

const SIconList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
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

const Intro = () => {
  return (
    <SIntroLayout>
      <STitle>
        <h1>오송아</h1> 
        <p>Junior Frontend Developer</p>
      </STitle>
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
          <ul>
            <li>
              Email : 
              <a href="songmiaoh@gmail.com" target="_blank">songmiaoh@gmail.com</a>
            </li>
            <li>Last updated : 2023.04.08</li>
          </ul>
      </SSubTitle>
    </SIntroLayout>
  );
}
export default Intro;