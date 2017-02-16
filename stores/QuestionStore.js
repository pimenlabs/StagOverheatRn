import {observable} from 'mobx';
import {ListView} from 'react-native';

class QuestionStore {

  questions = [
    {title: "First Question", author: "Feri", vote: 4, description: "Description 1", createdAt: new Date("2017-02-15")},
    {title: "Second Question", author: "Donald", vote: 5, description: "Description 2", createdAt: new Date("2017-02-15")},
    {title: "Third Question", author: "Heisenberg", vote: 0, description: "Description 3", createdAt: new Date("2017-02-15")},
  ];

  @observable dataSource;

  constructor(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows(this.questions);
  }

  add(doc){
    this.questions.push(doc);

    this.refresh();
  }

  //replace dataSource with new questions array
  refresh(){
    this.dataSource = this.dataSource.cloneWithRows(this.questions);
  }

}

const questionStore = new QuestionStore();
export default questionStore;
