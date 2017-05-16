/**
 * Created by David Maser on 16/05/2017.
 */
import React,{Component} from 'react';

class DisplayCard extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data
        };
    }
    render(){
        return(
            <div>{this.state.data.lastName},{this.state.data.firstName}</div>
        )
    }
}

export default DisplayCard;