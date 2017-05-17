/**
 * Created by David Maser on 16/05/2017.
 */
import React,{Component} from 'react';

class DisplayCard extends Component{
    constructor(props){
        super(props);
        this.state={
            json:this.props.json
        };
    }
    componentDidUpdate(){
        return(
            <div>{this.state.json.lastName},{this.state.json.firstName}</div>
        )
    }
    render(){
        return(
            <div>{this.state.json.lastName},{this.state.json.firstName}</div>
        )
    }
}

export default DisplayCard;