import axios from "axios";
import React, {Component} from "react";
import authHeader from "../service/AuthHeader";




class addSeries extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            titre: '', 
            description: '', 
           
         }
        this.changeTitleHandler = this.changeTitleHandler.bind(this); 
        this.saveSeries = this.saveSeries.bind(this); 

    }
    
    changeTitleHandler = (event) => {
        this.setState({titre: event.target.value}); 
    }
    changeDescriptionHandler = (e) => {
        this.setState({description: e.target.value})
    }
 
    saveSeries = (e) =>{
        e.preventDefault(); 
        let serie = {titre: this.state.titre, description: this.state.description}
        const API_URL = 'http://localhost:8080/api/test/';
        axios.post(API_URL + "user", serie, { headers: authHeader()}).then(
            res => {
                this.props.history.push("/user");
            }
        );
         
       
        
    }
    cancel(){
        this.props.history.push("/user"); 
    }
    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">Add Series</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Titre</label>
                                    <input className="form-control" type="text" name="titre" placeholder="Put the title here"
                                    value={this.state.titre} onChange={this.changeTitleHandler}
                                    />
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label>Description</label>
                                    <input className="form-control" type="text" name="description" placeholder="Put the desc here"
                                    value={this.state.description} onChange={this.changeDescriptionHandler}
                                    />
                                </div>
                                
                                <br/>
                                <button className="btn btn-success" onClick={this.saveSeries}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                               
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default addSeries;