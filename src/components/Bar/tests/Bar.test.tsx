import React from 'react';
import {mount} from '@shopify/react-testing';
import {scaleBand} from 'd3-scale';

import {Bar} from '../Bar';

jest.mock('../../../hooks/', () => ({
  usePrefersReducedMotion: jest.fn(() => ({
    prefersReducedMotion: false,
  })),
}));
jest.mock('d3-scale', () => ({
  scaleBand: jest.fn(() => jest.fn((value) => value)),
}));

describe('<Bar/>', () => {
  it('renders a path', () => {
    const bar = mount(
      <svg>
        <Bar
          height={1000}
          color="colorPurple"
          highlightColor="colorPurple"
          isSelected={false}
          x={0}
          rawValue={1000}
          width={100}
          yScale={scaleBand() as any}
          index={1}
          onFocus={jest.fn()}
          tabIndex={0}
        />
        ,
      </svg>,
    );

    expect(bar).toContainReactComponent('path', {
      // eslint-disable-next-line id-length
      d: `M0 0
        h100
        a0 0 0 010 0
        v1000
        H0
        V0
        a0 0 0 010-0
        Z`,
      fill: 'rgb(156, 106, 222)',
      style: {transform: 'translate(0px, -1000px) rotate(0deg)'},
    });
  });

  it('rounds the corners if hasRoundedCorners is true', () => {
    const bar = mount(
      <svg>
        <Bar
          height={1000}
          color="colorPurple"
          highlightColor="colorPurple"
          isSelected={false}
          x={0}
          rawValue={1000}
          width={100}
          yScale={scaleBand() as any}
          index={1}
          onFocus={jest.fn()}
          tabIndex={0}
          hasRoundedCorners
        />
        ,
      </svg>,
    );

    expect(bar).toContainReactComponent('path', {
      // eslint-disable-next-line id-length
      d: `M3 0
        h94
        a3 3 0 013 3
        v997
        H0
        V3
        a3 3 0 013-3
        Z`,
      fill: 'rgb(156, 106, 222)',
      style: {transform: 'translate(0px, -1000px) rotate(0deg)'},
    });
  });

  it('gives a 0 value an empty path d attribute and 0 height', () => {
    const bar = mount(
      <svg>
        <Bar
          height={0}
          color="colorPurple"
          highlightColor="colorPurple"
          isSelected={false}
          x={0}
          rawValue={0}
          width={100}
          yScale={scaleBand() as any}
          index={1}
          onFocus={jest.fn()}
          tabIndex={0}
        />
        ,
      </svg>,
    );

    expect(bar).toContainReactComponent('path', {
      // eslint-disable-next-line id-length
      d: ``,
      fill: 'rgb(156, 106, 222)',
      style: {transform: `translate(0px, 0px) rotate(0deg)`},
    });
  });

  it('uses the primary color when the bar is not selected', () => {
    const bar = mount(
      <svg>
        <Bar
          height={1000}
          color="colorPurple"
          highlightColor="colorRed"
          isSelected={false}
          x={0}
          rawValue={1}
          width={100}
          yScale={scaleBand() as any}
          index={1}
          onFocus={jest.fn()}
          tabIndex={0}
        />
        ,
      </svg>,
    );

    expect(bar).toContainReactComponent('path', {
      fill: 'rgb(156, 106, 222)',
    });
  });
});
