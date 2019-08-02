import React from 'react';
import TaggingRow from './TaggingRow/TaggingRow';

export default class GetZTC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceTags: [{ name: '', value: '' }],
    };
    this.onHandleAddClick = this.onHandleAddClick.bind(this);
    this.onHandleCancel = this.onHandleCancel.bind(this);
    this.onHandleChangeInput = this.onHandleChangeInput.bind(this);
    this.onSelectSuggesion = this.onSelectSuggesion.bind(this);
  }

  onHandleAddClick(evt) {
    this.setState({
      resourceTags: this.state.resourceTags.concat([{ name: '', value: '' }]),
    });
  }

  onHandleCancel(idx) {
    if (this.state.resourceTags.length > 1) {
      const filterData = this.state.resourceTags.filter((s, sidx) => {
        return idx !== sidx;
      });
      this.setState({
        resourceTags: filterData,
      });
    }
  }

  onHandleChangeInput(evt, idx) {
    const newresourceTags = this.state.resourceTags.map((tag, sidx) => {
      if (idx !== sidx) return tag;
      return { ...tag, [evt.target.name]: evt.target.value };
    });
    this.setState({ resourceTags: newresourceTags });
  }

  onHandleShowClick = () => {
    console.log(this.state.resourceTags);
  };

  onSelectSuggesion(evt, inputName, idx) {
    const newresourceTags = this.state.resourceTags.map((tag, sidx) => {
      if (idx !== sidx) return tag;
      return { ...tag, [inputName]: evt.currentTarget.innerText };
    });
    this.setState({ resourceTags: newresourceTags });
  }

  render() {
    return (
      <div className='dummy-popup'>
        <p>
          Adding tag for resource <span>Rsystems_DB.dbo</span>
        </p>
        {this.state.resourceTags.map((tag, idx) => (
          <TaggingRow
          key={idx}
            rowId={idx}
            handleCancel={this.onHandleCancel}
            onHandleChangeInput={this.onHandleChangeInput}
            textValue={tag}
            onSelectSuggesion={this.onSelectSuggesion}
          />
        ))}
        <button className='addmore' onClick={this.onHandleAddClick}>
          Add more
        </button>
        <button className='addmore' onClick={this.onHandleShowClick}>
          Show Data
        </button>
      </div>
    );
  }
}
