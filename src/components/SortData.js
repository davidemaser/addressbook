/**
 * Created by David Maser on 16/05/2017.
 */
import React,{Component} from 'react';
import DisplayLastNames from "./DisplayLastNames";
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
        //console.log(this.state.data[this.state.node]);
    }

    getDataEntries(){
        let entriesObj = this.state.data[this.state.node][this.state.letter];
        let entriesArray = [];
        let e;
        for(e in entriesObj){
            //console.log(entriesObj[e].lastName,e);
            entriesArray.push(
                <DisplayLastNames key={e} lastName={entriesObj[e]['lastName']} data={entriesObj[e]}/>
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
            </div>

        )
    }
}

export default SortData;