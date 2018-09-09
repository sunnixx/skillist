import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem, Icon, Left, Right, CheckBox, Body } from 'native-base';
import { AsyncStorage } from 'react-native';

class FilterResultScreen extends Component {

    static navigationOptions = {
        drawerLabel: () => null
    }

    constructor(props) {
        super(props);
        this.studentCheck = [];

        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleCheckbox() {

    }

    render() {
        const { navigation } = this.props;
        const students = JSON.parse(navigation.getParam('student', 'false'));

        return (
            <Container>
                <Content>
                    <List>
                        {students.map((student, index) => {
                            return (
                                <ListItem key={'listItem' + index} onPress={() => navigation.navigate('Result', { student })}>
                                    <Left key={'left' + index}>
                                        <CheckBox onPress={this.handleCheckbox} checked={this.studentCheck.push(false)}>
                                            <Body>
                                                <Text key={'text' + index}>{student.personalInformation[0].name}</Text>
                                            </Body>
                                        </CheckBox>
                                    </Left>
                                    <Right key={'right' + index}>
                                        <Icon key={'icon' + index} name='arrow-forward' />
                                    </Right>
                                </ListItem>
                            )
                        })}
                    </List>
                </Content>
            </Container>
        )
    }
}

export default FilterResultScreen;