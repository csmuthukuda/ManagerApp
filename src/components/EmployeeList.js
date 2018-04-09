import React, { Component } from 'react';
import { Button, CardSection } from './common';

class EmployeeList extends Component {
    static navigationOptions = {
        title: 'Employee List',
      };
    render() {
        return (
        <CardSection>
            <Button onPress={() => this.props.navigation.goBack()} >
            Go Back
            </Button>
            </CardSection>
        );
    }
}

export default EmployeeList;
