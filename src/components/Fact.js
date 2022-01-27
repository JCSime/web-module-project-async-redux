import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getFact } from '../actions';

const Fact = ({ fact,error, dispatch })=> {
    useEffect(()=>{
        dispatch(getFact());
    }, []);

    const handleClick = () => {
        dispatch(getFact());
    }
    return (
        <>
        <div className='text-box'>
            <p>"{fact.text}" </p>
        </div>
        <button className='button' onClick={handleClick}>New Fact</button>
        </>
    )
};

const mapStateToProps = state => {
    return {
      fact: state.fact,
      error: state.error
    };
  };


export default connect(mapStateToProps)(Fact);