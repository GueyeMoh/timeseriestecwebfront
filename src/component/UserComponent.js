import React, { Component } from "react";

import UserService from "../service/UserService";
import EventBus from "../common/EventBus";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: []
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }
  addSeries(){
    this.props.history.push("/add-series"); 
  }
  showDetails(){
    this.props.history.push("/show-details"); 
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>This is the list of my series</h3>
        </header>
        <div>
        <button className="btn btn-primary" onClick={this.addSeries.bind(this)}>Add Series</button>
        </div>
        <div className="row text-center">
          <div className="table-striped" >
                <thead>
                    <tr>
                        <th>Titre</th> 
                        <th>Description</th>
                        
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.content.map(
                            (content) =>
                                <tr key={content.id}>
                                <td>{content.titre}</td>
                                <td>{content.description}</td>
                                <td>
                                <button className='btn btn-info' >Update</button>
                                <button className='btn btn-danger' style={{marginLeft:"10px"}}>Delete</button>
                                <button className='btn btn-success' onClick={this.showDetails.bind(this)} style={{marginLeft:"10px"}}>Details</button>
                                </td>
                          </tr>
                                                                                        
                        )
                    }
                </tbody>
            </div>
        </div>
      </div>
    );
  }
}