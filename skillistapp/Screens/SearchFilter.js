import React, { Component } from 'react';
import { Container, Content, Text, Item, Icon, Input, Button, Toast, List, ListItem, Left, Right, CheckBox, Body } from 'native-base';
import { ToastAndroid, AsyncStorage } from 'react-native';

import app from '../API';

class SearchFilterScreen extends Component {

    static navigationOptions = {
        title: 'Search'
    }

    constructor(props) {
        super(props);

        this.search = '';
        this.students = [];

        this.state = { refresh: false }

        this.handleSearch = this.handleSearch.bind(this);
        this.checkSearch = this.checkSearch.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleListItem = this.handleListItem.bind(this);
    }

    handleFilter() {

    }

    handleSearch() {
        if (this.search !== '') {
            //Search item code

            app.searchStudent(this.search);

            setTimeout(function () {
                this.checkSearch()
            }.bind(this), 2000)

        } else {
            Toast.show({
                position: 'bottom',
                type: 'warning',
                duration: 3000,
                buttonText: 'Ok',
                text: 'Search field cannot be empty'
            })
        }
    }

    checkSearch() {
        AsyncStorage.getItem('search').then(item => {
            AsyncStorage.getItem('students').then(students => {
                if (students === 'false') {
                    Toast.show({ text: 'No results found', duration: 3000, buttonText: 'Ok', type: 'warning' })
                } else {
                    this.students = JSON.parse(students);
                    this.setState({ refresh: true })
                }
            })
        }).catch(err => alert(err));
    }

    handleListItem() {
    
    }

    render() {
        return (
            <Container>
                <Content>
                    <Content>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Name List / Group List</Text>
                    </Content>
                    <Content>
                        <Item>
                            <Icon active name='search' />
                            <Input onChangeText={(e) => this.search = e} placeholder='search' />
                        </Item>
                    </Content>
                    <Content style={{ marginTop: '10%' }} contentContainerStyle={{ alignContent: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                        <Button style={{ marginRight: 20 }} onPress={this.handleSearch}><Text>Search</Text></Button>
                        <Button onPress={this.handleFilter}><Text>Filter</Text></Button>
                    </Content>

                    <Content>
                        <List>
                            {this.students.map((student, index) => {
                                console.log(student);
                                return (
                                    <ListItem key={'listitem' + index} onPress={() => {this.props.navigation.navigate('Result',{student})}}>
                                        <Left key={'left' + index}>
                                            <CheckBox />
                                            <Body>
                                                <Text style={{marginLeft: 10}} key={'text' + index}>{student.personalInformation[0].name}</Text>
                                            </Body>
                                        </Left>
                                        <Right key={'right' + index}>
                                            <Icon key={'icon' + index} name="arrow-forward" />
                                        </Right>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Content>

                </Content>
            </Container>
        )
    }
}

export default SearchFilterScreen;