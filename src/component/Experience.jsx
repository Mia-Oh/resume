import { SSubtitle,SContent,SPeriodSection,SExperienceInfoSection } from "../style/style";


const Experience = () => {
  return (
    <section>
      <SSubtitle>Experience</SSubtitle>
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