import PatientVisitorLayout from "../../sub-layout/patient-visitor-layout";
import DischargeFollowUp from "./discharge-follow-up";
import DischargeToAFacility from "./discharge-to-a-facility";
import DuringYourStay from "./during-your-stay";
import GettingHelpAtHome from "./getting-help-at-home";
import PreparingForYourStay from "./preparing-your-stay-page";
import Visitation from "./visitation";

type GuidePageProps = {
  title: string;
  pathname: string;
};

const GuidePage = ({ title, pathname }: GuidePageProps) => {
  const guide = title.toLowerCase().replace(/ /g, "-");

  const components: Record<string, React.ComponentType> = {
    "preparing-for-your-stay": PreparingForYourStay,
    "during-your-stay": DuringYourStay,
    "discharge-follow-up": DischargeFollowUp,
    "getting-help-at-home": GettingHelpAtHome,
    "discharge-to-a-facility": DischargeToAFacility,
    visitation: Visitation,
  };

  const SelectedComponent = components[guide] || (() => <p>Page not found.</p>);

  return (
    <PatientVisitorLayout pathname={pathname} title={title}>
      <SelectedComponent />
    </PatientVisitorLayout>
  );
};

export default GuidePage;
