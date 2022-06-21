import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name,favoriteNumber, children}) => {
    return (
        <div>
            테스트 이름 : {name}, {children}
            <br/>
            넘버 넘버 : {favoriteNumber}
        </div>
    );
};

MyComponent.defaultProps = {
    name : '기본 이름'
}

MyComponent.protoTypes = {
    name : PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;