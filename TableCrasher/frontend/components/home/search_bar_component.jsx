import React from 'react';

export default class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search_term: "", selected: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFocus = this.changeFocus.bind(this);
  }

  update(e) {
    this.setState({search_term: e.target.value});
  }

  changeFocus() {
    if(this.state.selected === "") {
      this.setState({selected: "selected"});
    }
    else {
      this.setState({selected: ""});
    }
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
      <div className="search-form-cont">
      <h1>Make restaurant reservations the easy way</h1>
        <form onSubmit={this.handleSubmit} className="search-form" >
          <div className={`text-area ${this.state.selected}`}>
            <i className="fa fa-search fa-2x" aria-hidden="true"></i>
              <input
              type="text"
              value={this.state.search_term}
              onChange={(e) => this.update(e)}
              onFocus={this.changeFocus}
              onBlur={this.changeFocus}
              placeholder="Location or Restaurant" />
            </div>
          <input type="submit" value="Find a Table" className="submit" />
        </form>
      </div>
    );
  }
}
