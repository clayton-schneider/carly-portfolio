import { FunctionComponent } from "react";
// Types
import { SkillsSlice } from "../../types.generated";
import { SliceComponentProps } from "@prismicio/react";

// Variations
import { DefaultSkills } from "../../components/Skills/index";

const Skills: FunctionComponent<SliceComponentProps> = (props) => {
  const componentMap: { [key: string]: FunctionComponent<SkillsSlice> } = {
    default: DefaultSkills,
  };

  const VariableComponent = componentMap[props.slice.variation];

  return <VariableComponent {...props.slice} />;
};

export default Skills;
