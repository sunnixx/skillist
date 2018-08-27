import React, { Component } from 'react';
import { Container, Content, Text, Button, ListItem, CheckBox, Body } from 'native-base';
import { AsyncStorage, StyleSheet, TouchableOpacity } from 'react-native';

class DashboardScreen extends Component {

    static navigationOptions = {
        title: 'Dashboard'
    }

    constructor(props) {
        super(props);

        this.handleInsights = this.handleInsights.bind(this);
    }

    handleInsights() {
        //This will send to search / filter page
        this.props.navigation.navigate('SearchFilter');
    }

    render() {
        return (
            <Container>
                <Content>
                    <TouchableOpacity onPress={this.handleInsights}>
                        <Content style={styles.circle}>
                            <Text style={styles.insightText}>Student Insights</Text>
                        </Content>
                    </TouchableOpacity>

                    <Content style={styles.main}>
                        <ListItem>
                            <CheckBox checked={true} />
                            <Body>
                                <Text>Internships</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={true} />
                            <Body>
                                <Text>Scholarships</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={true} />
                            <Body>
                                <Text>Jobs / Postings</Text>
                            </Body>
                        </ListItem>
                    </Content>
                    <Content style={styles.nextButton}>
                        <Button style={{width: 100}}>
                            <Text style={{marginLeft:'15%'}}>Next</Text>
                        </Button>
                    </Content>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    circle: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginLeft: '25%',
        marginTop: '10%'
    },
    insightText: {
        textAlign: 'center',
        marginTop: '40%',
        fontSize: 20
    },
    main: {
        width: 150*2,
        height: 150,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginLeft: '10%',
        marginTop: '10%'
    },
    nextButton: {
        marginLeft: '40%',
        marginTop: '5%'
    }
})

module.exports = DashboardScreen;