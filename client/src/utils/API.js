import axios from "axios";

export default {

scrape: function(searchTerm, start, end) {
    const query = `/api/scrape/${searchTerm}${start !== undefined ? `/${start}`: ""}${end !== undefined ? `/${end}`: ""}`
    return axios.get(query);
},
getSavedArticles: function() {
    return axios.get("/api/article");
  },

deleteArticle: function(id) {
    return axios.delete("/api/article/" + id);
  }
};


