import React, {useState, useEffect} from "react";
import PostList from "./PostList";
import axios from "axios";
import Pagination from "./Pagination";
import queryString from  "query-string"
import Search from "./Search";

function PostMain() {
    const [mainPost, setMainPost] = useState([]);
    const [paginate, setPaginet] = useState({
        _limit: 10,
        _page: 1,
        _totalRows: 1
    });
    const [filters, setFilters] = useState({
       _limit: 10,
       _page: 1,
    });

    useEffect(() => {
        const getDataApi = async () => {
            try {
                //npm install --save query-string;
                const paramString = queryString.stringify(filters);
                const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await axios
                    .get(requestURL)
                    .then(function (response) {
                        return response;
                    })
                    .catch(error => console.log(error.message));
                setMainPost(response.data);
                setPaginet(response.data.pagination);
            } catch (e) {
                console.log(e.message)
            }
        };
        getDataApi();

    }, [filters]);

    function handlePaginateChange(newPage) {
        setFilters({
            ...filters,
            _page: newPage
        })
    }

    function handleSubmitSearch(valueSearch) {
        setFilters({
            ...filters,
            title_like: valueSearch.title,
            author_like: valueSearch.author
        })
    }

    return (
        <div>
            <Search searchData={handleSubmitSearch}/>
            <PostList posts={mainPost.data}/>
            <Pagination pagination={paginate} onChangePagination={handlePaginateChange} />
        </div>
    );
}

export default PostMain;
