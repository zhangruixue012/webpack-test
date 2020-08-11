import React, { Component } from 'react';
import ReactSvgEmoji from "react-svg-emoji/es5";

const { Emoji, parseToEmoji, insertStr, getCursortPosition } = ReactSvgEmoji;

class ReactEmoji extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            html: '',
        }
    }

    onSelectDemo1(text, key, data) {
        var index = getCursortPosition(document.querySelector('#input1'))
        var value = insertStr(this.state.value1, index, text)
        var html = parseToEmoji(value)
        this.setState({
            value1: value,
            html1: html,
        })
    }

    onChange1(e) {
        var html = parseToEmoji(e.target.value)
        this.setState({
            value1: e.target.value,
            html1: html,
        })
    }

    render(){
        const style = {
            pop: {
                width: '500px',
                top: '35px'
            },
        };

        return (<div>
            <Emoji
                style={style}
                onSelect={this.onSelectDemo1.bind(this)}
            />
            <input id='input1' style={{
                    display: 'block',
                    padding: "10px 10px",
                    width: "90%",
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    color: '#939393',
                    fontSize: '16px'
            }}
            value={this.state.value1}
            onChange={this.onChange1.bind(this)}/>

            <div style={{ margin: '10px' }}>
                转化展示效果：
                <p dangerouslySetInnerHTML={{ __html: this.state.html1 }} />
            </div>
        </div>)
    }
}

export default ReactEmoji


