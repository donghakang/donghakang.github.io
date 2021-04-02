import React, { Component } from 'react'
import ReactDOM from "react-dom";

export class Letter extends Component {
    
  constructor(props) {
    super(props);
    this.state = { 
        current: props.start,
        words: ['S', 'ㄱ', '!@', '^$', 'Z', 'K', 'ㄹ', 'k', '$$'],
        count: 9,
        step: 0
    };
    // this.current = this.current.bind(this);
  }


  componentDidMount() {
    // this.interval = setInterval(() => console.log('hello'), 1000);
  }

  componentWillUnmount() {
    // clearInterval(this.state.current);
  }

  tick() {
    this.state.step += 1
    this.setState({
        current: this.state.words[this.state.step % this.state.count]
    });

    if (this.state.step == 10) {
        clearInterval(this.interval)
        this.setState({
            step: 0
        })
    }
  }

  printStart = function() {
    
    this.interval = setInterval(() => {
        this.tick()
    }, 50);

    // this.setState({
    //     current: "A"
    // })
  }

  printEnd = () => {
    clearInterval(this.interval)
    this.setState({
        current: this.props.end,
        step: 0
    })
  }

  render() {
    return (
      <div className="word"
        onMouseEnter={
            () => this.printStart()
        }
        onMouseOut= {
            () => this.printEnd()
        }
        >   
        {this.state.current}
      </div>
    );
  }
}


export default function About() {
    return (
        <div className="about">
            <Letter start="D" end="ㄷ" />
        </div>
    );
}
