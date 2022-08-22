import { FunctionComponent } from "react";
// Types
import { HeroSlice } from "../../types.generated";
import { SliceComponentProps } from "@prismicio/react";

// Variations
import { DefaultHero } from "../../components/Hero/index";

const Hero: FunctionComponent<SliceComponentProps> = (props) => {
  const componentMap: { [key: string]: FunctionComponent<HeroSlice> } = {
    default: DefaultHero,
  };

  const VariableComponent = componentMap[props.slice.variation];

  return (
    <VariableComponent
      {...props.slice}
      // id={`${index}-portfolio-slice`}
    />
  );
};
export default Hero;
