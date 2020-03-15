import React from "react";
import API from "../../utils/API";
import axios from "axios";
import "./Home.css";
import Form from "../Form/Form";
import swal from 'sweetalert';


class Home extends React.Component {
    state = {
        articles: []
    }

    callAPI = (query, start, end) => {
        API.scrape(query, start, end)
        .then(articles =>{
            this.setState({
                articles: articles.data
            })
        })
    }

    showContentByState(){
        if (this.state.articles.length === 0){
            return (
                <div>

                </div>
            )
        }
        else {
            const articles = this.state.articles.map((article, index) => {
                const body={
                    title: article.snippet,
                    datePub: article.pub_date,
                    url: article.web_url
                }
                if (article.byline && article.byline.original){
                    body.author = article.byline.original;
                }
                else{body.author = "No Listed Author"}
                if (article.pub_date === undefined)  {
                    body.datePub = "No Date Provided"
                }  
                if (article.snippet === undefined || article.snippet === "")  {
                    body.title = "No Title Provided"
                } 

                return (
                <div className="container" key={index}>
                    <div className="card articleCard">
                        <h5 className="card-header">{body.title}</h5>
                        <div className="card-body">
                            <p className="card-text">{body.author}</p>
                            <p className="card-text smaller">{body.datePub}</p>
                            <a className="btn btn-secondary btnStyle" href={body.url} role="button" target="blank">Go to Article</a>
                            <button  className="btn btn-secondary btnStyle" onClick={()=>this.saveArticle(body)}>Save Article</button>
                         </div>
                    </div>
                </div>
                )  
                
            })
            
        return (
                <div className="artTitle">Top Articles <br />{articles}</div>
            )
        }
    }

    saveArticle(body) {
        swal("Article Saved!", "Head over to Saved Page to View.", "success");
        axios.post("/api/article/", body)
        .then(status => console.log(status))
        .catch(() => console.log("failed to send req"));
    }

    render() {
        return (
            <div>
            <br />
            <Form callApi={this.callAPI}/>
            <br />
            {this.showContentByState()}
            
            
            </div>)
    }
}

export default Home;