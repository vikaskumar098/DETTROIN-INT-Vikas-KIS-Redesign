import SubPageLayout from "../components/layout/SubPageLayout";
import { ADMISSION_PAGE } from "../data/subPageContent";

export default function AdmissionPage() {
  return (
    <SubPageLayout
      title={ADMISSION_PAGE.title}
      heroImage={ADMISSION_PAGE.heroImage}
      tabs={ADMISSION_PAGE.tabs}
    />
  );
}
