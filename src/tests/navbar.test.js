import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import NavBar from '../components/navbar';

import renderer from 'react-test-renderer';

describe('<Navbar />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<NavBar />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});