import React from 'react';
import './App.css';
import GifList from './components/GifList';
import GifForm from './components/GifForm';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import {getGifs} from './actions/index';
import {fetchStart}
function App(props) {

  const {loading, error, getGifs } = props;

  useEffect(() => {
    
  },[]);

  return (
    <div className='App'>
      <h1>Search For</h1>

      <GifForm />
      {
        (error !== '') && <h3>(error)</h3>
      }
      {
        loading ? <h3>Page is Loading...</h3> : <GifList/>
      }
    </div>
  );
}

const maptStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(maptStateToProps, {getGifs}) (App);