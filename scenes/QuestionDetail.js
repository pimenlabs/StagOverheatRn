import React, { Component } from 'react';
import { Header, Left, Right, Button, Body, Title, Container, Content, Text, Icon, Card, CardItem, Thumbnail } from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class QuestionDetail extends Component {

  renderHeader(){
    const {title} = this.props;
    return (
        <Header>
          <Left>
            <Button transparent onPress={()=> Actions.pop()}>
              <Icon name="arrow-back" style={{color: "#057ce4"}}/>
            </Button>
          </Left>
          <Body><Title>{title}</Title></Body>
          <Right/>
        </Header>
    )
  }

  render(){
    const {title, author} = this.props.question;
    //kode di atas dapat ditulis juga sbb
    /**
    * const title = this.props.question.title;
    * const author = this.props.question.author;
    */

    return (
      <Container>
        {this.renderHeader()}
        <Content>
          <Card>
            <CardItem bordered>
              <Left>
                <Icon name="help-circle" />
                <Body>
                  <Text>{title}</Text>
                  <Text note>{author}, on April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Lorem Ipsum dolor sit amet amet jabang baye
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon active name="arrow-up" />
                </Button>
                <Text>4</Text>
                <Button transparent>
                  <Icon active name="arrow-down" />
                </Button>
              </Right>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}
