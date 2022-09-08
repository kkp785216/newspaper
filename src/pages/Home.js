import React from 'react'
import store from '../redux/store'
import { useDispatch } from 'react-redux';
import action from '../redux/action'

const Home = () => {
  const state = store.getState();
  const dispatch = useDispatch();
  dispatch(action({
    type: 'Hello'
  }))
  console.log(state)
  return (
    <div>Home</div>
  )
}

export default Home