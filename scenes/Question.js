import React, { Component } from 'react';
import { Header, Title, Container, Content, Left, Body, Right, ListItem, Text, Icon } from 'native-base';
import {ListView} from 'react-native';

export default class Question extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.questions = [
      {title: "First Question", author: "Feri"},
      {title: "Second Question", author: "Donald"},
      {title: "Third Question", author: "Heisenberg"},
    ];
    this.state = {
      dataSource: ds.cloneWithRows(this.questions),
    };
  }

  renderHeader(){
    const {title} = this.props;

    return (
      <Header>
        <Body>
            <Title>{title}</Title>
        </Body>
      </Header>
    )
  }

  renderRow(rowData){
    return (
      <ListItem>
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

  render(){
    return (
      <Container>
        {this.renderHeader()}

        <Content>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
          />
        </Content>
      </Container>
    );
  }
}
