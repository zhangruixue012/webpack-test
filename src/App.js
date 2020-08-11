import React, { Component } from 'react';
// import ReactSvgEmoji from './react-svg-emoji';
import ReactEmojiPicker from './react-emoji-picker';

import EmojiPanel from "./emoji-panel";

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

class App extends Component {
      render() {
        return (
          <div>
              {/*<div>*/}
              {/*    我是ReactSvgEmoji:*/}
              {/*    <ReactSvgEmoji />*/}
              {/*</div>*/}

              {/*<div style={{ marginTop: '20px' }}>*/}
              {/*    我是ReactEmojiPicker:*/}
              {/*    <ReactEmojiPicker/>*/}
              {/*</div>*/}

              <EmojiPanel />


          </div>
        );
      }

}

export default App;
