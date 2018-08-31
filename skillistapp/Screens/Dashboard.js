import React, { Component } from 'react';
import { Container, Content, Text, Button, ListItem, CheckBox, Body } from 'native-base';
import { AsyncStorage, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

//Assets import
import insightsBg from '../assets/images/insights-bg.jpg';
import dashboardbg from '../assets/images/dashboard-bg.jpg';

class DashboardScreen extends Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
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
                    <ImageBackground source={dashboardbg} style={{ flex: 1, height: '100%', width: '100%' }}>

                        <TouchableOpacity onPress={this.handleInsights} style={styles.circle}>
                            <ImageBackground style={{ height: 200, width: 200 }}>
                                <Image source={insightsBg} style={{ height: 200, width: 200, position: "absolute", borderRadius: 200 / 2 }} />
                                <Text style={styles.insightText}>Student Insights</Text>
                            </ImageBackground>
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
                            <Button style={{ width: 100 }}>
                                <Text style={{ marginLeft: '15%' }}>Next</Text>
                            </Button>
                        </Content>
                    </ImageBackground>
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
        marginTop: '10%',
    },
    imagebg: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2

    },
    insightText: {
        textAlign: 'center',
        marginTop: '30%',
        fontSize: 30,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    main: {
        width: 150 * 2,
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