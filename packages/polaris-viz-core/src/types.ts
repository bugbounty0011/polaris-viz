import type {SVGProps} from 'react';

export interface DataPoint {
  key: number | string;
  value: number | null;
}

export interface DataSeries {
  data: DataPoint[];
  color?: Color;
  isComparison?: boolean;
  name?: string;
}

export type LineStyle = 'dashed' | 'solid' | 'dotted';

export interface GradientStop {
  offset: number;
  color: string;
  stopOpacity?: number;
}

export interface ActiveTooltip {
  x: number;
  y: number;
  index: number;
}

export interface Dimensions {
  width: number;
  height: number;
}

export type Color = string | GradientStop[];

// === Theme types === //
enum BarMargin {
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

export interface BarTheme {
  innerMargin: keyof typeof BarMargin;
  outerMargin: keyof typeof BarMargin;
  hasRoundedCorners: boolean;
  /**
   * @deprecated This prop is experimental and not ready for general use. If you want to use this, come talk to us in #polaris-data-viz
   */
  zeroAsMinHeight: boolean;
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

export enum DataType {
  Point = 'Point',
  BarGroup = 'BarGroup',
  Bar = 'Bar',
}

export type ChartType = 'default' | 'stacked';

export type GradientUnits = 'userSpaceOnUse' | 'objectBoundingBox';

export interface SparkLineChartProps {
  data: DataSeries[];
  accessibilityLabel?: string;
  isAnimated?: boolean;
  offsetLeft?: number;
  offsetRight?: number;
  theme?: string;
}

export interface SvgComponents {
  Svg: (props: SVGProps<SVGElement>) => any;
  Circle: (props: SVGProps<SVGCircleElement>) => any;
  Ellipse: (props: SVGProps<SVGEllipseElement>) => any;
  G: (props: SVGProps<SVGGElement>) => any;
  Text: (props: SVGProps<SVGTextElement>) => any;
  TSpan: (props: SVGProps<SVGTSpanElement>) => any;
  TextPath: (props: SVGProps<SVGTextPathElement>) => any;
  Path: (props: SVGProps<SVGPathElement>) => any;
  Polygon: (props: SVGProps<SVGPolygonElement>) => any;
  Polyline: (props: SVGProps<SVGPolylineElement>) => any;
  Line: (props: SVGProps<SVGLineElement>) => any;
  Rect: (props: SVGProps<SVGRectElement>) => any;
  Use: (props: SVGProps<SVGUseElement>) => any;
  Image: (props: SVGProps<SVGImageElement>) => any;
  Symbol: (props: SVGProps<SVGSymbolElement>) => any;
  Defs: (props: SVGProps<SVGDefsElement>) => any;
  LinearGradient: (props: SVGProps<SVGLinearGradientElement>) => any;
  RadialGradient: (props: SVGProps<SVGRadialGradientElement>) => any;
  Stop: (props: SVGProps<SVGStopElement>) => any;
  ClipPath: (props: SVGProps<SVGClipPathElement>) => any;
  Pattern: (props: SVGProps<SVGPatternElement>) => any;
  Mask: (props: SVGProps<SVGMaskElement>) => any;
}

export interface SparkBarChartProps {
  data: DataSeries[];
  dataOffsetRight?: number;
  dataOffsetLeft?: number;
  accessibilityLabel?: string;
  isAnimated?: boolean;
  theme?: string;
}

export interface SparkBarChartProps {
  data: DataSeries[];
  dataOffsetRight?: number;
  dataOffsetLeft?: number;
  accessibilityLabel?: string;
  isAnimated?: boolean;
  theme?: string;
  dimensions?: Dimensions;
}