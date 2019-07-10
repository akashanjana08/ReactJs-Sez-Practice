import React, { Component } from 'react';
import userAction from '../actions/action.user';
import {connect} from 'react-redux';
import _ from 'lodash';
class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wAmount: 0,
            totalDispatchedNotes: 0
        }
        this.notes = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 1];
        this.dispatchedNote = [];
    }

    componentDidMount(){
        const Ob2={a:1,k:23}
        const Ob1={a:8,b:2,c:3}
        const nObj = _.assign({},Ob1,Ob2)
        console.log(nObj);
    }

    render() {
        return (
            <div style={{ display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center', backgroundColor: '#d9ffb3', height: '100vh' }}>
                <div style={{ display: 'flex', width: '150vh', height: '60vh', backgroundColor: '#e6e6ff' }}>
                    <div style={{ flex: '50%', backgroundColor: '#A0A0A0', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h2>Welcome To ATM</h2>
                        <input name='wAmount' onChange={this._onHandleInputs} placeholder='Enter withdraw Money' type='number' style={{ textAlign: 'center', width: '250px', height: '50px', fontSize: '20px' }} />
                        <button onClick={this._onHandleClick} type='button' style={{ width: '250px', height: '50px', marginTop: '10px' }}>withdraw Money</button>
                    </div>
                    <div style={{ flex: '50%', backgroundColor: '#D3D3D3' }}>
                        <h3 style={{ textAlign: 'center' }}>  Notes Summary  </h3>
                        <div style={{ marginLeft: '200px', alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: '50px', width: '320px', backgroundColor: '#E9967A', flexFlow: 'row wrap' }}>
                            {this._dispatchNoteCount()}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', }}>
                            <h3>  Total dispatch Notes : {this.state.totalDispatchedNotes}  </h3>
                            {this.props.username ? this.props.username :this.props.loading}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    _dispatchNoteCount = () => {
        return (
            this.dispatchedNote.map((item, index) => {
                return (<div style={{ margin: '10px', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>{this.notes[index]} Rs of notes : {item}</div>)
            })
        )
    }

    _onHandleInputs = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    _onHandleClick = () => {
        let totalAmount = parseInt(this.state.wAmount);
        let tDispatchNotes = 0;
        for (let i = 0; i < this.notes.length; i++) {
            let note = Math.floor(totalAmount / this.notes[i]);
            this.dispatchedNote[i] = note;
            if (note !== 0) {
                tDispatchNotes += note;
            }
            totalAmount = totalAmount % this.notes[i];
        }
        this.setState({ totalDispatchedNotes: tDispatchNotes })
        this.props.getUsername();
    }
}

function mapstostate(state){
    return({
        username: state.UsernameReducer.userName,
        loading : state.UsernameReducer.loading,
    })
}

function mapDispatchToProps(dispatch){
    return (
        {
            getUsername : ()=>{
                dispatch(userAction())
            }
        }
    )
}

export default connect(mapstostate,mapDispatchToProps)(MyComponent);