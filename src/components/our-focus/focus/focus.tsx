import OurFocusLayout from "../../sub-layout/our-focus-layout";
import BrochureSection from "./brochure";
import ConditionsTherapyPrograms from "./conditions-theraphy-program";
import NutritionProgram from "./nutrition-program";
import PsychiatricInpatientTreatmentProgram from "./psychiatric-inpatient";

type FocusProps = {
  title: string;
  pathname: string;
};

const Focus = ({ title, pathname }: FocusProps) => {
  const focus = title.toLowerCase().replace(/ /g, "-");

  const components: Record<string, React.ComponentType> = {
    "psychiatric-inpatient-treatment-program":
      PsychiatricInpatientTreatmentProgram,
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
