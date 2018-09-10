import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('Testing App Component', () => {
  it('shoult renders without crashing', () => {
    const wrapper = shallow(
      <App />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
