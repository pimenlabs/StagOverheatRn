import React, { Component } from 'react';
import { Header, Title, Container, Content, Left, Body, Right, ListItem, Text, Icon, Button } from 'native-base';
import {ListView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react/native';

@observer
export default class Question extends Component {

  constructor() {
    super();
  }

  handleAdd(){
    const doc = {
      title: "Fourth Question", author: "TrexGG", vote: 10, description: "Description 4", createdAt: new Date("2017-03-15")
    };
    this.props.store.add(doc);
  }

  renderHeader(){
    const {title} = this.props;

    return (
      <Header>
        <Left/>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          <Button transparent onPress={()=> Actions.QuestionAdd()}>
            <Icon name="add-circle" style={{color: '#0098ff'}}/>
          </Button>
        </Right>
      </Header>
    )
  }

  renderRow(rowData){
    return (
      <ListItem onPress={()=> {Actions.QuestionDetail({question: rowData})}}>
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
