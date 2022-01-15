import axios from "axios";
import React, {Component} from "react";
import authHeader from "../service/AuthHeader";
import {API_URL} from "../service/Api"; 




class addDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: '', 
            valeur: '', 
            description: '', 
            commentaire: '', 
            tag: ''
           
         }
        this.changeDateHandler = this.changeDateHandler.bind(this); 
        this.changeValeurHandler = this.changeValeurHandler.bind(this); 
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this); 
        this.changeCommentaireHandler = this.changeCommentaireHandler.bind(this); 
        this.changeTagHandler = this.changeTagHandler.bind(this); 
        this.saveDetails = this.saveDetails.bind(this); 

    }
    
    changeDateHandler = (event) => {
        this.setState({date: event.target.value}); 
    }
    changeValeurHandler = (event) => {
        this.setState({valeur: event.target.value}); 
    }
    changeDescriptionHandler = (e) => {
        this.setState({description: e.target.value})
    }
    changeCommentaireHandler = (event) => {
        this.setState({commentaire: event.target.value}); 
    }
    changeTagHandler = (event) => {
        this.setState({tag: event.target.value}); 
    }
 
    saveDetails = (e) =>{
        e.preventDefault(); 
        let detail = {date: this.state.date, valeur: this.state.valeur, description: this.state.description, commentaire: this.state.commentaire, tag: this.state.tag}
    
        axios.post(API_URL + 'user/details', detail, {headers: authHeader()}).then(
            res => {
                this.props.history.push("/show-details");
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
                        <h3 className="text-center">Add Details</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Date</label>
                                    <input className="form-control" type="text" name="date" placeholder="Put the date of the event"
                                    value={this.state.date} onChange={this.changeDateHandler}
                                    />
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label>Valeur</label>
                                    <input className="form-control" type="text" name="valeur" placeholder="Put the value of the event"
                                    value={this.state.valeur} onChange={this.changeValeurHandler}
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
                                <div className="form-group">
                                    <label>Commentaire</label>
                                    <input className="form-control" type="text" name="commentaire" placeholder="Put the comment"
                                    value={this.state.commentaire} onChange={this.changeCommentaireHandler}
                                    />
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label>Tag</label>
                                    <input className="form-control" type="text" name="tag" placeholder="Put the tag here"
                                    value={this.state.tag} onChange={this.changeTagHandler}
                                    />
                                </div>
                                <br/>
                                <button className="btn btn-success" onClick={this.saveDetails}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                               
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default addDetails;