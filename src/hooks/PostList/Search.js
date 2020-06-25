import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
    searchData: PropTypes.func
};

Search.defaultProps = {
    searchData: null
};

function Search(props) {
    const { searchData} = props;
    const [valueSearch, setValueSearch] = useState({
        title: '',
        author: ''
    });

    const typeInputRef = useRef(null);

    function handleChangeInputSearch(e) {
        //handle multiple input get value
        const { name, value } = e.target;
        setValueSearch({
            ...valueSearch,
            [name]: value
        });

        if (!searchData) return;

        // clear
        if (typeInputRef.current) {
            clearTimeout(typeInputRef.current)
        }

        //Cho 300ms moi send request
        typeInputRef.current = setTimeout(() => {
            searchData(valueSearch)
        }, 300);
    }

    return (
        <div>
            <form>
                <input type="text" name="title" value={valueSearch.title} onChange={handleChangeInputSearch}/>
                <input type="text" name="author" value={valueSearch.author} onChange={handleChangeInputSearch} />
            </form>
        </div>
    );
}

export default Search;