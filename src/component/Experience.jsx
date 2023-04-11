import { SSubtitle,SContent,SPeriodSection,SExperienceInfoSection, SExperienceDescription } from "../style/style";


const Experience = () => {
  return (
    <section>
      <SSubtitle>Experience</SSubtitle>
      <SContent>
        <SPeriodSection>
          <h3>서울드래곤시티</h3>
          <span>2020.09 - 2022.06</span>
        </SPeriodSection>
        <SExperienceInfoSection>
          <SExperienceDescription>Revenue / 주임</SExperienceDescription>
        </SExperienceInfoSection>
      </SContent>
      <SContent>
        <SPeriodSection>
          <h3>Orchid Hotel Singapore</h3>
          <span>2018.08 - 2020.02</span>
        </SPeriodSection>
        <SExperienceInfoSection>
          <SExperienceDescription>Front Desk / GSO</SExperienceDescription>
        </SExperienceInfoSection>
      </SContent>
      <SContent>
        <SPeriodSection>
          <h3>후앤파트너스</h3>
          <span>2016.07 - 2017.10</span>
        </SPeriodSection>
        <SExperienceInfoSection>
          <SExperienceDescription>식음서비스 / 사원</SExperienceDescription>
        </SExperienceInfoSection>
      </SContent>
    </section>
  );
}

export default Experience;