/**
 * Created by David Maser on 16/05/2017.
 */
import React,{Component} from 'react';
import DisplayCard from "./DisplayCard";

class SortData extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data,
            node:'entries',
            letter:'a',
            overview:null
        };

        this.changeLetterValue = this.changeLetterValue.bind(this);
        this.changeDataValue = this.changeDataValue.bind(this)
    }

    changeDataValue(e){
        console.log(e.currentTarget);
        this.setState({overview:this.props.data});
    }

    changeLetterValue(e){
        this.setState({letter:e.currentTarget.textContent});
    }

    getDataIndexes(){
        let indexObj = this.state.data[this.state.node];
        let indexArray = [];
        let a;
        for(a in indexObj){
            indexArray.push(
                <div key={a} onClick={this.changeLetterValue}>{a}</div>
            )
        }

        return indexArray;
    }

    getDataEntries(){
        let entriesObj = this.state.data[this.state.node][this.state.letter];
        let entriesArray = [];
        let e;
        for(e in entriesObj){
            //console.log(entriesObj[e].lastName,e);
            entriesArray.push(
                <div key={e} data={e} onClick={this.changeDataValue}>{entriesObj[e]['lastName']}, {entriesObj[e]['firstName']}</div>
            )
        }

        return entriesArray;
    }

    render(){
        return(
            <div>
            <div className="index-selector">
                {this.getDataIndexes()}
            </div>
                <div className="index-view">
                    {this.getDataEntries()}
                </div>
                {this.state.overview !== null ? <DisplayCard data={this.state.overview}/> : null}

            </div>

        )
    }
}

export default SortData;