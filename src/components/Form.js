import React, {Component} from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
  }
  render (){
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <input className="form-control col-md-3" onChange={this.props.handleNameChange} value={this.props.name} name="name" type="text" placeholder="Pilot" />
        </div>
        <div className="form-group pull-right">
          <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
        </div>
      </form>
    )
  }
}
