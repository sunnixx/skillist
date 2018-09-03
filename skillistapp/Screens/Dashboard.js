import React, { Component } from 'react';
import { Container, Content, Text, Button, ListItem, CheckBox, Body } from 'native-base';
import { AsyncStorage, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

//Assets import
import insightsBg from '../assets/images/insights-bg.jpg';
import dashboardbg from '../assets/images/dashboard-bg.jpg';

class DashboardScreen extends Component {

    static navigationOptions = {
        header: null
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
                    <ImageBackground source={dashboardbg} style={{ height: '100%', width: '100%' }}>

                        <Content contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity onPress={this.handleInsights} style={styles.circle}>
                                <ImageBackground style={{ height: 200, width: 200 }}>
                                    <Image source={insightsBg} style={{ height: 200, width: 200, position: "absolute", borderRadius: 200 / 2 }} />
                                    <Text style={styles.insightText}>Student Insights</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </Content>


                        <Content contentContainerStyle={{ flex: 1, flexDirection: 'column' }}>
                            <TouchableOpacity>
                            <Content style={{ borderColor: '#ffffff', borderWidth: 1, backgroundColor: '#1abc9c', width: '100%', height: 100, marginBottom: 10, marginTop: 20, padding: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', color: '#ffffff', marginTop: 15 }}>Internship</Text>
                            </Content>
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                            <Content style={{ borderColor: '#ffffff', borderWidth: 1, backgroundColor: '#27ae60', width: '100%', height: 100, marginBottom: 10, marginTop: 20, padding: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', color: '#ffffff', marginTop: 15 }}>Scholarships</Text>
                            </Content>
                            </TouchableOpacity>

                            <TouchableOpacity>
                            <Content style={{ borderColor: '#ffffff', borderWidth: 1, backgroundColor: '#e74c3c', width: '100%', height: 100, marginBottom: 10, marginTop: 20, padding: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', color: '#ffffff', marginTop: 15 }}>Job posting</Text>
                            </Content>
                            </TouchableOpacity>
                        </Content>
                        {/* <ListItem>
                                <CheckBox checked={true} />
                                <Body>
                                    <Text style={styles.innerText}>Internships</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <CheckBox checked={true} />
                                <Body>
                                    <Text style={styles.innerText}>Scholarships</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <CheckBox checked={true} />
                                <Body>
                                    <Text style={styles.innerText}>Jobs / Postings</Text>
                                </Body>
                            </ListItem> */}
                        {/* <Content style={styles.nextButton}>
                            <Button style={{ width: 100 }} onPress={() => {this.props.navigation.navigate('Result')}}>
                                <Text style={{ marginLeft: '15%' }}>Next</Text>
                            </Button>
                        </Content> */}
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
        borderColor: '#d6d7da',
        marginTop: '10%',
    },
    innerText: {
        color: '#fafafa'
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
        marginTop: '10%'
    },
    nextButton: {
        marginTop: '10%',
        marginBottom: '32%'
    }
})

module.exports = DashboardScreen;