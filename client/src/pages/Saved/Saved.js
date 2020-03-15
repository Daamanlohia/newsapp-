import React from "react";
import API from "../../utils/API";
import swal from 'sweetalert';

class Saved extends React.Component{
    state = {
        articles: []
    }

    componentDidMount() {
        this.loadArticles();
      }

    loadArticles = () => {
        API.getSavedArticles()
          .then(res =>
            this.setState({ articles: res.data})
          )
          .catch(err => console.log(err));
      }

    deleteArticle = (id) => {
        swal("Article Deleted.");
        API.deleteArticle(id)
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }

      showContentByState(){
        if (this.state.articles.length === 0){
            return (
                <div className="container">
                   <p className="card-text"> No saved articles yet. Be the first to save one! </p>
                </div>
            )
        }
        else {
            const articles = this.state.articles.map((article, index) => {
                return (
                <div className="container" key={index}>
                    <div className="card articleCard">
                        <h5 className="card-header">{article.title}</h5>
                        <div className="card-body">
                            <p className="card-text">{article.author}
                            </p>
                            <p className="card-text smaller">{article.datePub}</p>

                            <a className="btn btn-secondary btnStyle" href={article.url} role="button" target="blank">Go to Article</a>
                            <button  className="btn btn-secondary btnStyle" onClick={()=>this.deleteArticle(article._id)}>Delete Article</button>
                         </div>
                    </div>
                </div>
                )  
                
            })
            
        return (
                <div className="artTitle">Saved Articles {articles}</div>
            )
        }
    }

    render(){
        return (
            this.showContentByState()
        )
    }
}


export default Saved;