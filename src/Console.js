import React,{Component} from 'react';

export default class ConsoleData extends Component{

    constructor(props){
       super(props);
       this.state={
           name:'Akash'
       }
    }

    componentDidMount(){
       console.log('Start Name.........');
       this.setState({name:'Deepak'},()=>{
           console.log(this.state.name)
       });
       console.log(this.state.name);
       console.log('End Name...........');
    }

    render(){
        return(
            <div>
                {this.state.name}
                </div>
        )
    }

}