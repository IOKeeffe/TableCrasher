import React from 'react';

export default class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search_term: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({search_term: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchRestaurants(this.state.search_term);
  }

  render() {
    let options = [];
    // for (var i = 1; i < 11; i++) {
    //   options.push(<option key={i} value={i}>{`${i} ${i === 1 ? 'person' : 'people'}`}</option>);
    // }
    // <select name="reservation[party_size]" onChange={(e) => {this.update(e, "party_size");}}>
    // {options}
    // </select>
    return (
      <form onSubmit={this.handleSubmit} className="search-bar">
      <input
      type="text"
      value={this.state.search_term}
      onChange={(e) => this.update(e)} />
      <input type="submit" value="Find a Table" placeholder="Location or Restaurant"/>
      </form>
    );
  }
}
