import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home';
import {fetchProduct} from '../../redux'
import {connect} from 'react-redux';
const Navigation = (props) =>{

    useEffect(()=>{
        props.fetchProduct();
    },[])
    return(
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
        </Router>
    )
};

const mapStateToProps = state =>{
    return {}
}

export default connect(mapStateToProps, {fetchProduct})(Navigation);