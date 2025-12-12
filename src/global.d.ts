declare module "react-plotly.js" {
  import * as React from "react";
  import Plotly from "plotly.js";

  export interface PlotParams {
    data: Plotly.Data[];
    layout?: Partial<Plotly.Layout>;
    config?: Partial<Plotly.Config>;
    style?: React.CSSProperties;
    className?: string;
    useResizeHandler?: boolean;
  }

  export default class Plot extends React.Component<PlotParams> {}
}
