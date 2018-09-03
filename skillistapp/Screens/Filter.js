import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem, Toast, Left, Input, Fab, Icon, CheckBox, Body, Thumbnail, Label } from 'native-base';
import { ImageBackground } from 'react-native';

import bg from '../assets/images/dashboard-bg.jpg';

class FilterScreen extends Component {

    constructor(props) {
        super(props);


        this.state = { internship: false, funding: false }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInternship = this.handleInternship.bind(this);
        this.handleFunding = this.handleFunding.bind(this);
    }

    handleSearch() {
        Toast.show({
            text: 'This will show the result',
            duration: 2000,
            position: 'bottom',
            buttonText: 'Got it!'
        })
    }

    handleInternship() {
        if (this.state.internship === true) {
            this.setState({ internship: false });
        } else if (this.state.internship === false) {
            this.setState({ internship: true });
        }
    }

    handleFunding() {
        if (this.state.funding === true) {
            this.setState({ funding: false });
        } else if (this.state.funding === false) {
            this.setState({ funding: true });
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <ImageBackground source={bg} style={{ flex: 1, alignItems: 'center', width: '100%', height: '100%' }}>
                        <Text style={{ marginTop: 20, fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>Filter Search</Text>
                        <Content style={{ marginTop: 20, width: '90%', backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>

                            <List>
                                <ListItem>
                                    <Input placeholder="Enter Name" onChangeText={(e) => this.name = e} />
                                </ListItem>

                                <ListItem>
                                    <Input placeholder="Enter Batch" onChangeText={(e) => this.batch = e} />
                                </ListItem>

                                <ListItem>
                                    <Input placeholder="Enter Cnic e.g. 12345-1234567-1" onChangeText={(e) => this.cnic = e} />
                                </ListItem>

                                <ListItem>
                                    <Input placeholder="Enter Email" onChangeText={(e) => this.email = e} />
                                </ListItem>

                                <ListItem>
                                    <Input placeholder="Enter GPA" onChangeText={(e) => this.gpa = e} />
                                </ListItem>

                                <ListItem>
                                    <Input placeholder="Group Name" onChangeText={(e) => this.group = e} />
                                </ListItem>

                                <ListItem>
                                    <CheckBox onPress={this.handleInternship} checked={this.state.internship} />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Internships </Text>
                                    </Body>
                                    <CheckBox onPress={this.handleFunding} checked={this.state.funding} />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Funding </Text>
                                    </Body>
                                </ListItem>

                                <Label style={{ paddingLeft: 20, color: '#ffffff', fontWeight: 'bold' }}>Degrees: </Label>
                                <ListItem style={{ borderBottomWidth: 0 }}>
                                    <Content contentContainerStyle={{ flex: 1, flexDirection: 'row' }}>
                                        <CheckBox />
                                        <Body>
                                            <Text style={{ color: '#ffffff' }}>Bachelors</Text>
                                        </Body>
                                        <CheckBox />
                                        <Body>
                                            <Text style={{ color: '#ffffff' }}>Masters</Text>
                                        </Body>
                                    </Content>
                                </ListItem>
                                <ListItem>
                                    <Content contentContainerStyle={{ flex: 1, flexDirection: 'row' }}>
                                        <CheckBox />
                                        <Body>
                                            <Text style={{ color: '#ffffff' }}>Phd</Text>
                                        </Body>
                                        <CheckBox />
                                        <Body>
                                            <Text style={{ color: '#ffffff' }}>Post - Doc</Text>
                                        </Body>
                                    </Content>
                                </ListItem>
                                <ListItem style={{ borderBottomWidth: 0 }}>
                                    <CheckBox />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Certification</Text>
                                    </Body>
                                    <CheckBox />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Programmes</Text>
                                    </Body>
                                </ListItem>
                                <ListItem style={{ borderBottomWidth: 0 }}>
                                    <CheckBox />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Projects</Text>
                                    </Body>
                                    <CheckBox />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Startups</Text>
                                    </Body>
                                </ListItem>
                                <ListItem style={{ borderBottomWidth: 0 }}>
                                    <CheckBox />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Scholarships</Text>
                                    </Body>
                                    <CheckBox />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Industrail Funding</Text>
                                    </Body>
                                </ListItem>
                                <ListItem style={{ borderBottomWidth: 0 }}>
                                    <CheckBox />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Local Journal</Text>
                                    </Body>
                                    <CheckBox />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>International Journal</Text>
                                    </Body>
                                </ListItem>
                            </List>
                        </Content>

                    </ImageBackground>
                </Content>
                <Fab
                    style={{ backgroundColor: '#2980b9' }}
                    position="bottomRight"
                    onPress={this.handleSearch}
                >
                    <Icon name="search" color="#ffffff" />
                </Fab>
            </Container>
        )
    }
}

export default FilterScreen;