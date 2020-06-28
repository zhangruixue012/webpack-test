import React, { Component } from 'react';
import Link from './test/link'

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
  };

class App extends Component {
      render() {
        return (
          <div>
              我好困
              <Link>链接组件</Link>
            </div>
        );
      }

}

export default App;