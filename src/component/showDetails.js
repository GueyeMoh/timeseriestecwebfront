import axios from "axios";
import react, {Component} from "react";
import {API_URL} from '../service/Api'; 
import authHeader from '../service/AuthHeader'; 

class showDetails extends Component{
    constructor(props){
        super(props); 
        this.state = {
            content: []
        }
    }

    componentDidMount(){
        axios.get(API_URL + "user/details", { headers: authHeader() }).then(res =>{
            this.setState({
                content: res.data
              
            }); 
        }); 
        console.log("les dtails" +this.state.content); 
        
    }
    addDetails(){
        
        this.props.history.push("/add-details"); 
    }

    render(){
        return (
            <div className="container">
            <header className="jumbotron">
              <h3>This is the details of this serie</h3>
            </header>
            <div>
            <button className="btn btn-primary" onClick={this.addDetails.bind(this)}>Add Details</button>
            </div>
            <div className="row text-center">
              <div className="table table-striped" >
                    <thead>
                        <tr>
                            <th>Date</th> 
                            <th>Valeur</th> 
                            <th>Description</th>
                            <th>Commentaire</th> 
                            <th>Tag</th> 
                            
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.content.map(
                                (content) =>
                                    <tr key={content.id}>
                                    <td>{content.date}</td>
                                    <td>{content.valeur}</td>
                                    <td>{content.description}</td>
                                    <td>{content.commentaire}</td>
                                    <td>{content.tag}</td>
                                    <td>
                                    <button className='btn btn-info' >Update</button>
                                    <button className='btn btn-danger' style={{marginLeft:"10px"}}>Delete</button>
                                    
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
export default showDetails;