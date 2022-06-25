import { Fragment } from "react";
import PropTypes from 'prop-types';

const MyComponent = ({name, number, children}) => {
    return (
        <Fragment>        
            <div>안녕하세요 제 이름은 {name} 입니다.</div>
            <div>children 값은 {children} 입니다.</div>
            <br/>
            숫자 : {number}
        </Fragment>
    );
}

MyComponent.defaultProps = {
    name : '기본이름'
}

MyComponent.propTypes = { 
    name : PropTypes.string,
    number : PropTypes.number.isRequired
}

export default MyComponent;