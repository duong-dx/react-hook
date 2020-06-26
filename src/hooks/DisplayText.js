import React from 'react';
import PropTypes from 'prop-types';

DisplayText.propTypes = {
    name: PropTypes.string,
};

DisplayText.defaultProps = {
    name: ''
}

function DisplayText(props) {
    const { name } = props;
    console.log(name)
    return (
        <h1>{name}</h1>
    );
}

//mỗi lần thằng cha render lại thì con cũng bị render lại
//export default DisplayText;
//mỗi lần thằng cha render lại thì con không bị render lại nếu " nếu Giá trị không "
export default React.memo(DisplayText);