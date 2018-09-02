import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';

class ResultScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props;
        const student = navigation.getParam('student','false');
        return (
            <Container>
                <Content>
                    <Text>{student.personalInformation[0].name}</Text>
                </Content>
            </Container>
        )
    }
}

export default ResultScreen;