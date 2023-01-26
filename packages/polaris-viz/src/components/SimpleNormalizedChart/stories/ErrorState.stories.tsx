import {ChartState} from '@shopify/polaris-viz-core';
import type {Story} from '@storybook/react';

export {META as default} from './meta';

import type {SimpleNormalizedChartProps} from '../..';

import {DEFAULT_PROPS, DEFAULT_DATA, Template} from './data';

export const ErrorState: Story<SimpleNormalizedChartProps> = Template.bind({});

ErrorState.args = {
  ...DEFAULT_PROPS,
  data: DEFAULT_DATA.map(({name}) => ({
    name,
    data: [],
  })),
  state: ChartState.Error,
};
