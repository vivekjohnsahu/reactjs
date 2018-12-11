import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
class HelloWorld extends React.Component{
    constructor(){
        super();
        this.newname='mayank'
    }
    render(){
        return(
        <h1>{this.newname}</h1>
        )
    }
}

class Vivek extends React.Component{
    getName(){
        return ' john'
    }
    render(){
        return(
        <section>
            {this.getName()}
        </section>
        )
    }
}

class HelloWorldsimple extends React.Component{
    render(){
        return(
        <h1>HelloWorldsimple</h1>
        )
    }
}

class Newjohn extends React.Component{
    render(){
        return(
            <div>
                <section className="foo">
                    <HelloWorld/>
                    <Vivek/>
                    <HelloWorldsimple/>
                </section>
                <input type="text" />
            </div>
        )
    }
}

ReactDOM.render(<Newjohn />,document.getElementById('root'))