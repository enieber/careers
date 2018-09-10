import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Product from './Product';

describe('Testing Product Component', () => {
  it('shoult renders without crashing', () => {
    const wrapper = shallow(
      <Product
        img=""
        title="Product 1"
        value="100,00"
        description="test description"
        category="Category 1"
        buy={() => {}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
    const propsChange = {
      img: '',
      title: 'test 1',
      value: '10,00',
      description: 'description',
      category: 'category test',
      buy: () => {},
    };
    wrapper.setProps(propsChange);
    expect(wrapper.instance().props).toEqual(propsChange);
  });
  it('simulates buy click', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Product
        img=""
        title="Product 1"
        value="100,00"
        description="test description"
        category="Category 1"
        buy={onButtonClick}
      />,
    );
    wrapper.find('#button').simulate('click');
    expect(onButtonClick.callCount).toEqual(1);
  });
});
