import { SliceSimulator } from "@prismicio/slice-simulator-react";
import SliceZone from "next-slicezone";

import state from "../.slicemachine/libraries-state.json";

import * as Slices from "../slices";
const resolver = ({ sliceName }) => Slices[sliceName];

const SliceSimulatorPage = () => (
  <SliceSimulator
    // The `sliceZone` prop should be a function receiving slices and rendering them using your `SliceZone` component.
    sliceZone={(props) => <SliceZone {...props} resolver={resolver} />}
    state={state}
  />
);

export default SliceSimulatorPage;

// Only include this page in development
export const getStaticProps = () => {
  if (process.env.NODE_ENV === "production") {
    return { notFound: true };
  } else {
    return { props: {} };
  }
};
