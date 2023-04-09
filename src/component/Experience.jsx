import styled from "styled-components";

const SContent = styled.div`
  display:flex;
`;

const SPeriodSection = styled.div`
  
`;

const SExperienceInfoSection = styled.div`
  
`;

const Experience = () => {
  return (
    <section>
      <h2>Experience</h2>
      <SContent>
        <SPeriodSection>
          <span>2020.09 - 2022.06</span>
        </SPeriodSection>
        <SExperienceInfoSection>
          <h3>서울드래곤시티</h3>
          <span>Revenu / 주임</span>
        </SExperienceInfoSection>
      </SContent>
      <SContent>
        <SPeriodSection>
          <span>2018.08 - 2020.02</span>
        </SPeriodSection>
        <SExperienceInfoSection>
          <h3>Orchid Hotel Singapore</h3>
          <span>Front Desk / GSO</span>
        </SExperienceInfoSection>
      </SContent>
      <SContent>
        <SPeriodSection>
          <span>2016.07 - 2017.10</span>
        </SPeriodSection>
        <SExperienceInfoSection>
          <h3>후앤파트너스</h3>
          <span>사원</span>
        </SExperienceInfoSection>
      </SContent>
    </section>
  );
}

export default Experience;