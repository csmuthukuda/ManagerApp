import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { StackNavigator } from 'react-navigation';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAroWjUZoS8nUwvspc3PYzNCbA4XXkCPmE',
            authDomain: 'managerapp-6640f.firebaseapp.com',
            databaseURL: 'https://managerapp-6640f.firebaseio.com',
            projectId: 'managerapp-6640f',
            storageBucket: 'managerapp-6640f.appspot.com',
            messagingSenderId: '458744004695'
        };
        firebase.initializeApp(config);
    }


    render() {
        return (

            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <RootStack />

            </Provider>
        );
    }
}


const RootStack = StackNavigator(
    {
        LoginForm: {
            screen: LoginForm,
        },
        EmployeeList: {
            screen: EmployeeList,
        }
    },
    {
        initialRouteName: 'LoginForm',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);

export default App;
