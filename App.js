import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import OnBoarding from './routes/onBoarding';
import { createStore, combineReducers,applyMiddleware } from "redux"
import {Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { makeServer } from "./server";
import restaurantsReducer from "./store/reducers/restaurants"
window.server = makeServer();

const rootReducer = combineReducers({
    restaurants: restaurantsReducer
})
const store = createStore(rootReducer,applyMiddleware(ReduxThunk))
export default function App() {
  
    return ( 
      <Provider store={store}>
        <OnBoarding/>
      </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});