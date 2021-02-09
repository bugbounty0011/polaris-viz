import {Series, StackSeries} from 'components/MultiSeriesBarChart/types';

import {DEFAULT_MAX_Y} from '../../../../constants';
import {getMinMax} from '../get-min-max';

const mockData: Series[] = [
  {
    data: [
      {label: 'label', rawValue: 10},
      {label: 'label', rawValue: 20},
      {label: 'label', rawValue: 30},
    ],
    color: 'colorBlack',
    name: 'LABEL1',
  },
  {
    data: [
      {label: 'label', rawValue: 1},
      {label: 'label', rawValue: 2},
      {label: 'label', rawValue: 3},
    ],
    color: 'colorBlack',
    name: 'LABEL2',
  },
];
const mockStackedData = [
  [
    [0, 10],
    [0, 20],
    [0, 30],
  ],
  [
    [10, 11],
    [20, 22],
    [30, 33],
  ],
] as StackSeries[];

const mockZeroData: Series[] = [
  {
    data: [
      {label: 'label', rawValue: 0},
      {label: 'label', rawValue: 0},
      {label: 'label', rawValue: 0},
    ],
    color: 'colorBlack',
    name: 'LABEL1',
  },
  {
    data: [
      {label: 'label', rawValue: 0},
      {label: 'label', rawValue: 0},
      {label: 'label', rawValue: 0},
    ],
    color: 'colorBlack',
    name: 'LABEL2',
  },
];
const mockZeroStackedData = [
  [
    [0, 0],
    [0, 0],
    [0, 0],
  ],
  [
    [0, 0],
    [0, 0],
    [0, 0],
  ],
] as StackSeries[];

describe('get-min-max', () => {
  it('returns min and max of non stacked data when stackedValues is null', () => {
    const {min, max} = getMinMax(null, mockData);

    expect(min).toStrictEqual(0);
    expect(max).toStrictEqual(30);
  });

  it('returns min and max of stacked values when stackedValues is not null', () => {
    const {min, max} = getMinMax(mockStackedData, mockData);

    expect(min).toStrictEqual(0);
    expect(max).toStrictEqual(33);
  });

  it('returns the default max y value for non stacked values of all zeros', () => {
    const {max} = getMinMax(null, mockZeroData);
    expect(max).toStrictEqual(DEFAULT_MAX_Y);
  });

  it('returns the default max y value for stacked values of all zeros', () => {
    const {max} = getMinMax(mockZeroStackedData, mockZeroData);
    expect(max).toStrictEqual(DEFAULT_MAX_Y);
  });
});