import React, {Component} from 'react';
import {Container, Content, Text,Button} from 'native-base';
import {AsyncStorage} from 'react-native';

class DashboardScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    <Button onPress={() => {AsyncStorage.removeItem('token'); this.props.navigation.navigate('Login')}}>
                        <Text>Logout</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

module.exports = DashboardScreen;