import SubPageLayout from "../components/layout/SubPageLayout";
import { COCURRICULAR_PAGE } from "../data/subPageContent";

export default function CoCurricularPage() {
  return (
    <SubPageLayout
      title={COCURRICULAR_PAGE.title}
      heroImage={COCURRICULAR_PAGE.heroImage}
      tabs={COCURRICULAR_PAGE.tabs}
    />
  );
}
