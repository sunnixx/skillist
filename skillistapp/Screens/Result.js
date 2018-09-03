import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem, Right, Left } from 'native-base';
import { ImageBackground, Image } from 'react-native';

import bgImage from '../assets/images/dashboard-bg.jpg';
import avatar from '../assets/images/default-avatar.jpg';


class ResultScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        const students = navigation.getParam('student', 'false');
        return (
            <Container>
                {/* <Content> */}
                    <ImageBackground source={bgImage} style={{width: '100%', height: 150 }}>
                        <Text style={{textAlign:'center', marginTop: 10, color:'#fafafa', fontWeight: 'bold', fontSize: 20}}>Student Information</Text>
                    </ImageBackground>
                {/* </Content> */}
                
                <Image source={avatar} style={{ marginTop: 60, marginLeft: 115, height: 130, width: 130, position: "absolute", borderRadius: 200 / 2 }} />

                <Content style={{marginTop: 40}}>
                    <Text style={{textAlign:'center', fontWeight:'bold', fontSize: 30}}>{students.personalInformation[0].name}</Text>
                    <Text style={{textAlign:'center', color:'#e3e3e3',fontSize:15}}>Batch {students.personalInformation[0].batch}, RollNo {students.personalInformation[0].rollno}</Text>
                    <List>
                        <ListItem>
                            <Left><Text>Father Name: </Text></Left>
                            <Text>{students.personalInformation[0].fatherName}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Cnic: </Text></Left>
                            <Text>{students.personalInformation[0].cnic}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Address: </Text></Left>
                            <Text>{students.personalInformation[0].address}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Gender: </Text></Left>
                            <Text>{students.personalInformation[0].gender}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Contact: </Text></Left>
                            <Text>{students.personalInformation[0].phone}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Email: </Text></Left>
                            <Text>{students.personalInformation[0].email}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Facebook: </Text></Left>
                            <Text>{students.socialmedia[0].facebook}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Twitter: </Text></Left>
                            <Text>{students.socialmedia[0].twitter}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>LinkedIn: </Text></Left>
                            <Text>{students.socialmedia[0].linkedin}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Degrees: </Text></Left>
                            {students.professionalInformation[0].degrees.forEach(item => {
                                return (
                                    <Text>{item}</Text>
                                )
                            }) }
                        </ListItem>
                        <ListItem>
                            <Left><Text>Certificates: </Text></Left>
                            {students.professionalInformation[0].certificates.forEach(item => {
                                return (
                                    <Text>{item}</Text>
                                )
                            }) }
                        </ListItem>
                        <ListItem>
                            <Left><Text>Programmes: </Text></Left>
                            {students.professionalInformation[0].programmes.forEach(item => {
                                return (
                                    <Text>{item}</Text>
                                )
                            }) }
                        </ListItem>
                        <ListItem>
                            <Left><Text>Projects: </Text></Left>
                            {students.achievements[0].projects.forEach(item => {
                                return (
                                    <Text>{item}</Text>
                                )
                            }) }
                        </ListItem>
                        <ListItem>
                            <Left><Text>Startups: </Text></Left>
                            {students.achievements[0].startups.forEach(item => {
                                return (
                                    <Text>{item}</Text>
                                )
                            }) }
                        </ListItem>
                        <ListItem>
                            <Left><Text>Funding: </Text></Left>
                            <Text>{students.achievements[0].funding}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Rec Certification: </Text></Left>
                            <Text>{students.achievements[0].recCertifications}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Scholarships: </Text></Left>
                            <Text>{students.achievements[0].scholarships}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Industrail Funding: </Text></Left>
                            <Text>{students.achievements[0].industrailFunding}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>GPA: </Text></Left>
                            <Text>{students.achievements[0].gpa}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Group Name: </Text></Left>
                            <Text>{students.achievements[0].groupName}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Project Collaboration: </Text></Left>
                            <Text>{students.achievements[0].projectCollaboration}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Researcher: </Text></Left>
                            <Text>{students.achievements[0].researcher}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Local Journal: </Text></Left>
                            <Text>{students.achievements[0].locJournal}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>International Journal: </Text></Left>
                            <Text>{students.achievements[0].intJournal}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Special Course: </Text></Left>
                            <Text>{students.achievements[0].sCourse}</Text>
                        </ListItem>
                        <ListItem>
                            <Left><Text>Internships: </Text></Left>
                            <Text>{students.achievements[0].internships}</Text>
                        </ListItem>
                    </List>
                </Content>

            </Container>
        )
    }
}

export default ResultScreen;