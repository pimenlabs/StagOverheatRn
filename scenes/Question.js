import React, { Component } from 'react';
import {
  Header, Title, Container, Content, Left, Body, Right,
  ListItem, Text, Icon, Button, Input, Item
} from 'native-base';
import {ListView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react/native';

@observer
export default class Question extends Component {

  constructor() {
    super();
    this.state = {
      displaySearchBar: false, //state to show n hide searchBar
      search: "" //search form field value
    }
  }

  handleAdd(){
    const doc = {
      title: "Fourth Question", author: "TrexGG", vote: 10, description: "Description 4", createdAt: new Date("2017-03-15")
    };
    this.props.store.add(doc);
  }

  renderHeader(){
    const {title} = this.props;

    let header = (
      <Header>
        <Left/>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          {/* set displaySearchBar state to true onPress search icon */}
          <Button transparent onPress={()=> this.setState({displaySearchBar: true})}>
            <Icon name="search" style={{color: '#0098ff'}}/>
          </Button>
          <Button transparent onPress={()=> Actions.QuestionAdd()}>
            <Icon name="add-circle" style={{color: '#0098ff'}}/>
          </Button>
        </Right>
      </Header>
    );

    //display search form when state.displaySearchBar true
    if(this.state.displaySearchBar){
      header = (
        <Header searchBar rounded>
          <Item>
            <Icon name="search" />
            <Input
              placeholder="Search"
              onChangeText={(text) => this.setState({search: text})}
              value={this.state.search}
            />
          </Item>
          <Button transparent onPress={()=> this.handleSearch()}>
            <Text>Search</Text>
          </Button>
        </Header>
      )
    }

    return header;
  }

  handleGoToQuestionDetail(rowData){
    //find answers using API
    this.props.store.findAnswers(rowData.id);

    Actions.QuestionDetail({question: rowData});
  }

  renderRow(rowData){
    return (
      <ListItem onPress={()=> this.handleGoToQuestionDetail(rowData)}>
        <Body>
          <Text>{rowData.author}</Text>
          <Text note>{rowData.title}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" style={{color: "#0098ff"}}/>
        </Right>
      </ListItem>
    );
  }

  handleSearch(){
    //get search value from search form
    const {search} = this.state;

    //call store method search
    this.props.store.search(search);

    //hide searchBar and clear search
    this.setState({displaySearchBar: false});
  }

  render(){
    const {dataSource} = this.props.store;
    return (
      <Container>
        {this.renderHeader()}

        <Content>
          <ListView
            dataSource={dataSource}
            renderRow={this.renderRow.bind(this)}
            enableEmptySections={true}
          />
        </Content>
      </Container>
    );
  }
}
