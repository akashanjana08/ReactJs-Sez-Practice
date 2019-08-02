import React, { Component } from 'react';
import AutocompleteInput from '../AutoCompleteTextBox/AutoCompleteTextBox';
import './style.css';
const imageCancel = require('./cancel.png');
const suggetionData = [
  'Alligator',
  'Bask',
  'Crocodilian',
  'Death Roll',
  'Eggs',
  'Jaws',
  'Reptile',
  'Solitary',
  'Tail',
  'Wetlands',
];
export default class TaggingRow extends Component {
  constructor(props) {
    super(props);
    this.onHandleCancel = this.onHandleCancel.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSelectSuggesion = this.onSelectSuggesion.bind(this);
  }

  onHandleCancel(idx) {
    let that = this;
    return function () {
      that.props.handleCancel(idx);
    };
  };

  onChangeInput(evt, id) {
    this.props.onHandleChangeInput(evt, id);
  }

  onSelectSuggesion(evt, inputName, id) {
    this.props.onSelectSuggesion(evt, inputName, id);
  }

  render() {
    return (
      <div className='tagging-row'>
        <div className='tagging-section'>
          <AutocompleteInput
            id={this.props.rowId}
            suggestions={suggetionData}
            placeHolder='Name'
            tagMessage='e.g. Owner, Networking'
            inputBoxName='name'
            onChangeInput={this.onChangeInput}
            textValue={this.props.textValue.name}
            onSelectSuggesion={this.onSelectSuggesion}
          />
          <AutocompleteInput
            id={this.props.rowId}
            suggestions={suggetionData}
            placeHolder='Value'
            tagMessage='e.g. TeamA, Network Admin, Short Description'
            inputBoxName='value'
            onChangeInput={this.onChangeInput}
            textValue={this.props.textValue.value}
            onSelectSuggesion={this.onSelectSuggesion}
          />
          <div className='cancel'>
            <img
              src={imageCancel}
              onClick={this.onHandleCancel(this.props.rowId)}
              alt='cancel'
            />
          </div>
        </div>
      </div>
    );
  }
}
