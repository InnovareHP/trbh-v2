import InPatientVisitorLayout from "../sub-layout/inpatient-visitor-layout";
import DuringYourStay from "./during-your-stay";
import PreparingYourStay from "./preparing-your-stay";

type GuidePageProps = {
  title: string;
  pathname: string;
};

const GuidePage = ({ title, pathname }: GuidePageProps) => {
  const guide = title.toLowerCase().replace(/ /g, "-");

  const components: Record<string, React.ComponentType> = {
    "preparing-for-your-stay": PreparingYourStay,
    "during-your-stay": DuringYourStay,
  };

  const SelectedComponent = components[guide] || (() => <p>Page not found.</p>);

  return (
    <InPatientVisitorLayout pathname={pathname} title={title}>
      <SelectedComponent />
    </InPatientVisitorLayout>
  );
};

export default GuidePage;
