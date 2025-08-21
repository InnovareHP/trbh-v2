import OurFocusLayout from "../../sub-layout/our-focus-layout";
import BrochureSection from "./brochure";
import ConditionsTherapyPrograms from "./conditions-theraphy-program";
import NutritionProgram from "./nutrition-program";
import WhyThreeRivers from "./why-three-rivers-behavioral-health";

type FocusProps = {
  title: string;
  pathname: string;
};

const Focus = ({ title, pathname }: FocusProps) => {
  const focus = title.toLowerCase().replace(/ /g, "-");

  const components: Record<string, React.ComponentType> = {
    "why-three-rivers-behavioral-health": WhyThreeRivers,
    "conditions-and-therapy-programs": ConditionsTherapyPrograms,
    "nutrition-program": NutritionProgram,
    brochure: BrochureSection,
  };

  const SelectedComponent = components[focus] || (() => <p>Page not found.</p>);

  return (
    <OurFocusLayout pathname={pathname} title={title}>
      <SelectedComponent />
    </OurFocusLayout>
  );
};

export default Focus;
