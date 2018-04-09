import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

    static navigationOptions = {
        title: 'LoginForm',
      };

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    
    renderButton() {
        ////////////////////////////////////////////////////
        console.log(this.props.logInSuccess);
        if (this.props.logInSuccess) {
            this.props.navigation.navigate('EmployeeList');
        }
        if (this.props.loading) {
            console.log('spinner loading');
            return <Spinner size='large' />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
        </Button>
        );
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='email@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        inputValue={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Password'
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        inputValue={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>

                <CardSection>
                    <Button
                        onPress={() => this.props.navigation.navigate('EmployeeList')}
                    >
                    Go to EmployeeList
                    </Button>
                </CardSection>


            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading,
        logInSuccess: state.auth.logInSuccess
    };
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);
