import React, { Component } from 'react';
import Product from './product/Product';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Product
          img="http://www.abudhabi2.com/wp-content/uploads/2017/06/IMG-Worlds-of-Adventure-1-945x776.jpg"
          title="Product 1"
          value="100,00"
          description="test description"
          category="Category 1"
          buy={() => {}}
        />
      </div>
    );
  }
}

export default App;
