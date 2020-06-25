import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onChangePagination: PropTypes.func,
};

Pagination.defaultProps = {
    onChangePagination: null
}

function Pagination(props) {
    const {pagination, onChangePagination} = props;
    const {_page, _limit, _totalRows} = pagination;
    const totalPage = Math.ceil(_totalRows / _limit);
    function handleChangePage(newPage) {
        console.log(newPage)
        if (onChangePagination) {
            onChangePagination(newPage);
        }
    };

    return (
        <div>
            <Button disabled={(_page <= 1 ? true : false)} onClick={() => handleChangePage(_page - 1)} className="btn btn-primary">Pre</Button>
            <a disabled={true} className="btn btn-default">{_page} / {totalPage}</a>
            <Button disabled={(_page >= totalPage) ? true : false} onClick={() => handleChangePage(_page + 1)} className="btn btn-primary">Next</Button>
        </div>
    );
}

export default Pagination;