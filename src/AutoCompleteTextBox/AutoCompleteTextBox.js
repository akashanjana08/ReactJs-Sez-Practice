import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.css';
class AutoCompleteTextBox extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
  };

  static defaultProps = {
    suggestions: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: '',
    };
    this.inputName = '';
    this.isShowSuggetion=false
  }

  onChange = id => e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
    this.props.onChangeInput(e, id);
  };

  onhandleInputClick = e => {
    this.inputName = e.target.name;
  };

  onClick = id => e => {
    console.log("OnSelectList")
    this.setState({
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
    this.props.onSelectSuggesion(e, this.inputName, id);
  };

  onFocusOut=()=>{
    console.log("onFocusOut")
    this.setState({
      showSuggestions: false
    });
  }

 

  render() {
    const {
      onClick,
      onKeyDown,
      state: {
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;

    let suggestionsListComponent;
      
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className='suggestions'>
            {filteredSuggestions.map((suggestion, index) => {
              return (
                <li
                  key={suggestion}
                  onClick={onClick(this.props.id)}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = null;
      }
    }

    return (
      <Fragment>
        <div className='tagging'>
          <input
            type='text'
            name={this.props.inputBoxName}
            className='input-box'
            placeholder={this.props.placeHolder}
            onChange={this.onChange(this.props.id)}
            onKeyDown={onKeyDown}
            value={userInput}
            onClick={this.onhandleInputClick}
            autoComplete='off'
            onBlur={this.onFocusOut}
          />
          {/* <div class='tagging-message'>{this.props.tagMessage}</div> */}
          {suggestionsListComponent}
        </div>
      </Fragment>
    );
  }

  

  componentWillReceiveProps(nextProps) {
    if (nextProps.textValue !== this.props.textValue) {
      this.setState({ userInput: nextProps.textValue });
    }
  }
}

export default AutoCompleteTextBox;
