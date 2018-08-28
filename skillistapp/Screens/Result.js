import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';
import {AsyncStorage} from 'react-native';

class ResultScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text>Result Screen</Text>
                </Content>
            </Container>
        )
    }
}

export default ResultScreen;