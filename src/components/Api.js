import React, {Component} from 'react';

class Api extends Component {
    constructor(props) {
        super(props);
        this.state={
            equb:[]
        }
    }
   async componentDidMount() {
        try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const equb = await res.json();
      this.setState({
        equb
      });
    } catch (e) {
      console.log(e);
    }

    }

    render() {
        return (
            <div>
                {this.state.equb.map(item => (
                    <div key={item.id}>
                      <h1>{item.title}</h1>
                        <span>{item.description}</span>
          </div>
        ))}
            </div>
        );
    }
}

export default Api;