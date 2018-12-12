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

class FristPro extends React.Component{
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

class Todolistitem extends React.Component{
    constructor(){
        super();
        this.changeStatus = this.changeStatus.bind(this);
        this.state = {
            tasks: [{
                name:'Vivek sahu',
                completed: false
            } ,
            {
                name:'John sani', 
                completed: false
            },
            {  
                name:'Ashwani kumar',
                completed: false
            }]
        }
    }

    changeStatus(index){
        var tasks = this.state.tasks;
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState({
            tasks:tasks
        })
    }

    render(){
        return(
            <ul>
           {
               this.state.tasks.map((task, index) => {
                   return  <Todolist key={task.name} index={index} clickHandler={this.changeStatus} details={task}/>
               })
           }
       </ul>
        )
    }
}

class Todolist extends React.Component{
    render(){
        return(
            <li onClick={ ()=> {
                    this.props.clickHandler(this.props.index);
                }} className={this.props.details.completed ? 'completed':''}>
                <span className='pointehand'>
                    {this.props.details.name}
                </span>
            </li>
        )
    }
}

class Newjohn extends React.Component{
    render(){
        return(
            <div>
                <section>
                    <section className="foo">
                        <HelloWorld/>
                        <FristPro/>
                        <HelloWorldsimple/>
                        <label>Name : </label>
                        <input type="text" />
                    </section>
                    <section className="fooList">
                        <Todolistitem/>
                    </section>
                </section>
            </div>
        )
    }
}

ReactDOM.render(<Newjohn />,document.getElementById('root'))