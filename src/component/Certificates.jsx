import { SSubtitle,SContent,SPeriodSection,SExperienceInfoSection,SExperienceDescription } from "../style/style";

const Certificates = () => {
  return (
    <>
      <section>
        <SSubtitle>Certificates</SSubtitle>
        <SContent>
          <SPeriodSection>
            <span>2022.04</span>
          </SPeriodSection>
          <SExperienceInfoSection>
            <SExperienceDescription>SMAT 서비스 경영 3급</SExperienceDescription>
            <p>한국생산성본부</p>
          </SExperienceInfoSection>
        </SContent>
        <SContent>
          <SPeriodSection>
            <span>2015.12</span>
          </SPeriodSection>
          <SExperienceInfoSection>
            <SExperienceDescription>ERP 물류 정보관리사 2급</SExperienceDescription>
            <p>한국생산성본부</p>
          </SExperienceInfoSection>
        </SContent>
        <SContent>
          <SPeriodSection>
            <span>2015.06</span>
          </SPeriodSection>
          <SExperienceInfoSection>
            <SExperienceDescription>ERP 회계 정보관리사 2급</SExperienceDescription>
            <p>한국생산성본부</p>
          </SExperienceInfoSection>
        </SContent>

      </section>
    </>
  )
};
export default Certificates;
