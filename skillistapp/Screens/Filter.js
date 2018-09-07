import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem, Button, Toast, Left, Input, Fab, Icon, CheckBox, Body, Thumbnail, Label } from 'native-base';
import { ImageBackground } from 'react-native';

import bg from '../assets/images/dashboard-bg.jpg';

import app from '../API';

class FilterScreen extends Component {

    constructor(props) {
        super(props);

        this.filterCheckData = [];

        //Filter class variables
        this.name = '', this.batch = '', this.cnic = '', this.email = '', this.gpa = '', this.group = '';


        this.state = {
            internship: false,
            funding: false,
            bachelors: false,
            masters: false,
            postdoc: false,
            phd: false,
            certification: false,
            programmes: false,
            project: false,
            startup: false,
            scholarship: false,
            industrailFunding: false,
            locJournal: false,
            intJournal: false

        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleInternship = this.handleInternship.bind(this);
        this.handleFunding = this.handleFunding.bind(this);
        this.handleBachelors = this.handleBachelors.bind(this);
        this.handleMasters = this.handleMasters.bind(this);
        this.handlePhd = this.handlePhd.bind(this);
        this.handleCertification = this.handleCertification.bind(this);
        this.handlePostdoc = this.handlePostdoc.bind(this);
        this.handleProgrammes = this.handleProgrammes.bind(this);
        this.handleProjects = this.handleProjects.bind(this);
        this.handleStartups = this.handleStartups.bind(this);
        this.handleScholarships = this.handleScholarships.bind(this);
        this.handleIndustrailFunding = this.handleIndustrailFunding.bind(this);
        this.handleLocJournal = this.handleLocJournal.bind(this);
        this.handleIntJournal = this.handleIntJournal.bind(this);
    }

    handleSearch() {
        
        let name = this.name; 
        let cnic = this.cnic;
        let batch = this.batch;
        let group = this.group;
        let gpa = this.gpa;
        let email = this.email;
        
        this.filterCheckData = [];

        if(name !== '') {
            this.filterCheckData.push({name: name});
        }

        if(cnic !== '') {
            this.filterCheckData.push({cnic: cnic});
        }

        if(batch !== '') {
            this.filterCheckData.push({batch :batch});
        }

        if(group !== '') {
            this.filterCheckData.push({group: group});
        }

        if(gpa !== '') {
            this.filterCheckData.push({gpa: gpa});
        }

        if(email !== '') {
            this.filterCheckData.push({email: email});
        }


        this.filterCheckData.push({
            bachelors: this.state.bachelors,
            certification: this.state.certification,
            funding: this.state.funding,
            industrailFunding: this.state.industrailFunding,
            internship: this.state.internship,
            intJournal: this.state.intJournal,
            locJournal: this.state.locJournal,
            masters: this.state.masters,
            phd: this.state.phd,
            postdoc: this.state.postdoc,
            programmes: this.state.programmes,
            project: this.state.project
        })

        app.searchByFilter(this.filterCheckData);
    }

    handleBachelors() {
        if (this.state.bachelors === true) {
            this.setState({ bachelors: false });
        } else if (this.state.bachelors === false) {
            this.setState({ bachelors: true });
        }

    }

    handleMasters() {
        if (this.state.masters === true) {
            this.setState({ masters: false });
        } else if (this.state.masters === false) {
            this.setState({ masters: true });
        }
    }

    handlePhd() {
        if (this.state.phd === true) {
            this.setState({ phd: false });
        } else if (this.state.phd === false) {
            this.setState({ phd: true });
        }
    }

    handleCertification() {
        if (this.state.certification === true) {
            this.setState({ certification: false });
        } else if (this.state.certification === false) {
            this.setState({ certification: true });
        }
    }

    handlePostdoc() {
        if (this.state.postdoc === true) {
            this.setState({ postdoc: false });
        } else if (this.state.postdoc === false) {
            this.setState({ postdoc: true });
        }
    }

    handleProgrammes() {
        if (this.state.programmes === true) {
            this.setState({ programmes: false });
        } else if (this.state.programmes === false) {
            this.setState({ programmes: true });
        }
    }

    handleProjects() {
        if (this.state.project === true) {
            this.setState({ project: false });
        } else if (this.state.project === false) {
            this.setState({ project: true });
        }
    }

    handleStartups() {

        if (this.state.startup === true) {
            this.setState({ startup: false });
        } else if (this.state.startup === false) {
            this.setState({ startup: true });
        }

    }

    handleIndustrailFunding() {
        if (this.state.industrailFunding === true) {
            this.setState({ industrailFunding: false });
        } else if (this.state.industrailFunding === false) {
            this.setState({ industrailFunding: true });
        }
    }

    handleScholarships() {
        if (this.state.scholarship === true) {
            this.setState({ scholarship: false });
        } else if (this.state.scholarship === false) {
            this.setState({ scholarship: true });
        }
    }

    handleLocJournal() {
        if (this.state.locJournal === true) {
            this.setState({ locJournal: false });
        } else if (this.state.locJournal === false) {
            this.setState({ locJournal: true });
        }
    }

    handleIntJournal() {
        if (this.state.intJournal === true) {
            this.setState({ intJournal: false });
        } else if (this.state.intJournal === false) {
            this.setState({ intJournal: true });
        }
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
                                <ListItem >
                                    <Input placeholder="Enter Name" onChangeText={(e) => this.name = e} />
                                    <Button onPress={() => app.searchByName(this.name)}><Icon name='search' /></Button>
                                </ListItem>

                                <ListItem>
                                    <Input placeholder="Enter Batch" onChangeText={(e) => this.batch = e} />
                                    <Button onPress={() => app.searchByBatch(this.batch)}><Icon name='search' /></Button>
                                </ListItem>

                                <ListItem>
                                    <Input placeholder="Enter Cnic e.g. 12345-1234567-1" onChangeText={(e) => this.cnic = e} />
                                    <Button onPress={() => app.searchByCnic(this.cnic)}><Icon name='search' /></Button>
                                </ListItem>

                                <ListItem>
                                    <Input placeholder="Enter Email" onChangeText={(e) => this.email = e} />
                                    <Button onPress={() => app.searchByEmail(this.email)}><Icon name='search' /></Button>
                                </ListItem>

                                <ListItem>
                                    <Input placeholder="Enter GPA" onChangeText={(e) => this.gpa = e} />
                                    <Button onPress={() => app.searchByGpa(this.gpa)}><Icon name='search' /></Button>
                                </ListItem>

                                <ListItem>
                                    <Input placeholder="Group Name" onChangeText={(e) => this.group = e} />
                                    <Button onPress={() => app.searchByGroup(this.group)}><Icon name='search' /></Button>
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
                                        <CheckBox onPress={this.handleBachelors} checked={this.state.bachelors} />
                                        <Body>
                                            <Text style={{ color: '#ffffff' }}>Bachelors</Text>
                                        </Body>
                                        <CheckBox onPress={this.handleMasters} checked={this.state.masters} />
                                        <Body>
                                            <Text style={{ color: '#ffffff' }}>Masters</Text>
                                        </Body>
                                    </Content>
                                </ListItem>
                                <ListItem>
                                    <Content contentContainerStyle={{ flex: 1, flexDirection: 'row' }}>
                                        <CheckBox onPress={this.handlePhd} checked={this.state.phd} />
                                        <Body>
                                            <Text style={{ color: '#ffffff' }}>Phd</Text>
                                        </Body>
                                        <CheckBox onPress={this.handlePostdoc} checked={this.state.postdoc} />
                                        <Body>
                                            <Text style={{ color: '#ffffff' }}>Post - Doc</Text>
                                        </Body>
                                    </Content>
                                </ListItem>
                                <ListItem style={{ borderBottomWidth: 0 }}>
                                    <CheckBox onPress={this.handleCertification} checked={this.state.certification} />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Certification</Text>
                                    </Body>
                                    <CheckBox onPress={this.handleProgrammes} checked={this.state.programmes} />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Programmes</Text>
                                    </Body>
                                </ListItem>
                                <ListItem style={{ borderBottomWidth: 0 }}>
                                    <CheckBox onPress={this.handleProjects} checked={this.state.project} />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Projects</Text>
                                    </Body>
                                    <CheckBox onPress={this.handleStartups} checked={this.state.startup} />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Startups</Text>
                                    </Body>
                                </ListItem>
                                <ListItem style={{ borderBottomWidth: 0 }}>
                                    <CheckBox onPress={this.handleScholarships} checked={this.state.scholarship} />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Scholarships</Text>
                                    </Body>
                                    <CheckBox onPress={this.handleIndustrailFunding} checked={this.state.industrailFunding} />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Industrial Funding</Text>
                                    </Body>
                                </ListItem>
                                <ListItem style={{ borderBottomWidth: 0 }}>
                                    <CheckBox onPress={this.handleLocJournal} checked={this.state.locJournal} />
                                    <Body>
                                        <Text style={{ color: '#ffffff' }}>Local Journal</Text>
                                    </Body>
                                    <CheckBox onPress={this.handleIntJournal} checked={this.state.intJournal} />
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