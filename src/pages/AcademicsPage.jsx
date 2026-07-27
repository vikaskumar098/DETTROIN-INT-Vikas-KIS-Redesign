import SubPageLayout from "../components/layout/SubPageLayout";
import { ACADEMICS_PAGE } from "../data/subPageContent";

export default function AcademicsPage() {
  return (
    <SubPageLayout
      title={ACADEMICS_PAGE.title}
      heroImage={ACADEMICS_PAGE.heroImage}
      tabs={ACADEMICS_PAGE.tabs}
    />
  );
}
