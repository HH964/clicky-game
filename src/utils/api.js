import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=ezMnHKSFFs4U8kLi7B08wLgCvit2m1gV&limit=20";

export default{
    search: function(query){
        return axios.get(BASEURL + query + APIKEY)
    }
};

