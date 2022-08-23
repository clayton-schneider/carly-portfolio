import { FunctionComponent } from "react";
// Types
import { PortfolioSlice } from "../../types.generated";

import { SliceComponentProps } from "@prismicio/react";

// Variations
import { DefaultPortfolio } from "../../components/Portfolio/index";

const Portfolio: FunctionComponent<SliceComponentProps> = (props) => {
  const componentMap: { [key: string]: FunctionComponent<PortfolioSlice> } = {
    default: DefaultPortfolio,
  };

  const VariableComponent = componentMap[props.slice.variation];

  return <VariableComponent {...props.slice} />;
};

export default Portfolio;
