import React from 'react';
import type {
  LabelFormatter,
  ChartProps,
  WithRequired,
} from '@shopify/polaris-viz-core';
import {DEFAULT_CHART_PROPS} from '@shopify/polaris-viz-core';

import {ChartContainer} from '../ChartContainer';
import type {ComparisonMetricProps} from '../ComparisonMetric';
import {usePrefersReducedMotion} from '../../hooks';

import {Chart} from './Chart';

export type DonutChartProps = {
  comparisonMetric?: Omit<ComparisonMetricProps, 'theme'>;
  showLegend?: boolean;
  labelFormatter?: LabelFormatter;
} & ChartProps;

export function DonutChart(props: DonutChartProps) {
  const {
    data,
    theme,
    comparisonMetric,
    showLegend,
    labelFormatter,
    isAnimated,
  }: WithRequired<DonutChartProps, 'theme'> = {
    ...DEFAULT_CHART_PROPS,
    labelFormatter: (value) => `${value}`,
    showLegend: true,
    ...props,
  };

  const {prefersReducedMotion} = usePrefersReducedMotion();
  const shouldAnimate = !prefersReducedMotion && isAnimated;

  return (
    <ChartContainer theme={theme}>
      <Chart
        isAnimated={shouldAnimate}
        data={data}
        labelFormatter={labelFormatter}
        comparisonMetric={comparisonMetric}
        showLegend={showLegend}
        theme={theme}
      />
    </ChartContainer>
  );
}