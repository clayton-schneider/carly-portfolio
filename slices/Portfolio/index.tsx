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

  return (
    <VariableComponent
      {...props.slice}
      // id={`${index}-portfolio-slice`}
    />
  );
};

// const Portfolio = ({ slice }) => (
//   <section>
//     <span className="title">
//       {slice.primary.title ? (
//         <RichText render={slice.primary.title} />
//       ) : (
//         <h2>Template slice, update me!</h2>
//       )}
//     </span>
//     {slice.primary.description ? (
//       <RichText render={slice.primary.description} />
//     ) : (
//       <p>start by editing this slice from inside Slice Machine!</p>
//     )}
//   </section>
// );

export default Portfolio;
