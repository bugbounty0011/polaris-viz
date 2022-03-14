import type {InterpolatorFn} from '@react-spring/web';
import type {Color, BarTheme} from '@shopify/polaris-viz-core';
import type {Series, SeriesPoint} from 'd3-shape';

export interface DataPoint {
  key: number | string;
  value: number | null;
}

export interface Data {
  label: string;
  rawValue: number;
}

export interface NullableData {
  label: string;
  rawValue: number | null;
}

export type LineStyle = 'dashed' | 'solid' | 'dotted';

export interface GradientStop {
  offset: number;
  color: string;
  stopOpacity?: number;
}

export type LabelFormatter = (value: string | number | null) => string;

export type StringLabelFormatter = (
  value: string,
  index?: number,
  data?: string[],
) => string;

export type NumberLabelFormatter = (value: number) => string;

export interface GradientStop {
  offset: number;
  color: string;
}

export interface YAxisTick {
  value: number;
  formattedValue: string;
  yOffset: number;
}

export interface Dimensions {
  width: number;
  height: number;
}

export interface SparkChartData {
  value: number | null;
}

export type PathInterpolator = InterpolatorFn<readonly number[], string>;
export type NumberInterpolator = InterpolatorFn<readonly number[], number>;

export interface XAxisOptions {
  labelFormatter?: StringLabelFormatter;
  useMinimalLabels?: boolean;
  hide?: boolean;
  wrapLabels?: boolean;
}
export interface YAxisOptions {
  labelFormatter?: NumberLabelFormatter;
  integersOnly?: boolean;
}

// === Theme types === //
export enum BarMargin {
  Small = 0.05,
  Medium = 0.1,
  Large = 0.3,
  None = 0,
}

export interface GridTheme {
  showHorizontalLines: boolean;
  showVerticalLines: boolean;
  horizontalOverflow: boolean;
  color: string;
  horizontalMargin: number;
}

export interface XAxisTheme {
  showTicks: boolean;
  labelColor: string;
  hide: boolean;
}

export interface CrossHairTheme {
  color: string;
  width: number;
}

export interface YAxisTheme {
  labelColor: string;
  backgroundColor: string;
}

export interface ChartContainerTheme {
  borderRadius: string;
  padding: string;
  backgroundColor: string;
}

export interface LineTheme {
  sparkArea: Color | null;
  hasSpline: boolean;
  style: LineStyle;
  hasPoint: boolean;
  width: number;
  pointStroke: string;
}

export interface TooltipTheme {
  backgroundColor: string;
  valueColor: string;
  labelColor: string;
}
export interface SeriesColors {
  comparison: string;
  single: Color;
  upToFour: Color[];
  fromFiveToSeven: Color[];
  all: Color[];
}
export interface Legend {
  labelColor: string;
  valueColor: string;
  trendIndicator: {positive: string; negative: string; neutral: string};
}

export interface PartialTheme {
  chartContainer?: Partial<ChartContainerTheme>;
  bar?: Partial<BarTheme>;
  line?: Partial<LineTheme>;
  grid?: Partial<GridTheme>;
  xAxis?: Partial<XAxisTheme>;
  yAxis?: Partial<YAxisTheme>;
  crossHair?: Partial<CrossHairTheme>;
  legend?: Partial<Legend>;
  seriesColors?: Partial<SeriesColors>;
  tooltip?: Partial<TooltipTheme>;
}

export interface Theme {
  chartContainer: ChartContainerTheme;
  bar: BarTheme;
  grid: GridTheme;
  xAxis: XAxisTheme;
  yAxis: YAxisTheme;
  line: LineTheme;
  crossHair: CrossHairTheme;
  legend: Legend;
  seriesColors: SeriesColors;
  tooltip: TooltipTheme;
}
export interface Margin {
  Top: number;
  Left: number;
  Right: number;
  Bottom: number;
}

export enum RoundedBorder {
  None,
  Top,
  Right,
  Bottom,
  Left,
}

export type Direction = 'horizontal' | 'vertical';
export type StackedSeries = Series<
  {
    [key: string]: number;
  },
  string
>;
export type FormattedStackedSeries = SeriesPoint<{
  [key: string]: number;
}>[];

export interface SingleIndexGap {
  index: number;
  gap: number;
}
export interface StackedBarGapDirections {
  positive: SingleIndexGap[];
  negative: SingleIndexGap[];
}

export type GradientUnits = 'userSpaceOnUse' | 'objectBoundingBox';