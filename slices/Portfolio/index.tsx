import { FunctionComponent } from "react";
// import { PortfolioSlice } from "../../types.generated";

// Variations
import { DefaultPortfolio } from "../../components/Portfolio/index";

// Log props to find shape
interface ISliceProps {
  context: {};
  index: number;
  slice: {
    primary: {};
    items: {}[];
    variation: string;
  };
}

const Portfolio: FunctionComponent<ISliceProps> = ({
  slice: { primary, items, variation },
  index,
}) => {
  const componentMap: { [key: string]: FunctionComponent } = {
    default: DefaultPortfolio,
  };

  const VariableComponent = componentMap[variation];

  return (
    <VariableComponent
      // id={`${index}-portfolio-slice`}
      primary={primary}
      items={items}
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
