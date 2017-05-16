/**
 * Created by David Maser on 16/05/2017.
 */
import React,{Component} from 'react';
import DisplayCard from "./DisplayCard";

class DisplayLastNames extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data,
            overview:null
        };
        this.changeDataValue = this.changeDataValue.bind(this)
    }

    changeDataValue(){
        this.setState({overview:this.props.data});
    }

    render(){
        return(
            <div>
            <div data={this.state.overview} onClick={this.changeDataValue}>{this.props.lastName}</div>
                {this.state.overview !== null ? <DisplayCard data={this.state.overview}/> : null}
            </div>
        )
    }
}

export default DisplayLastNames;