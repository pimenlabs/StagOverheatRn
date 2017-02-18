import {observable} from 'mobx';
import {ListView} from 'react-native';
import Rest from 'fetch-on-rest';

class QuestionStore {

  @observable dataSource;

  constructor(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows([]);
    this.api = new Rest("http://localhost:8000/");
    this.refresh();
  }

  add(doc){
    this.api.post('question', doc);
  }

  //replace dataSource with new questions array
  refresh(){
    const self = this;
    this.api.get('question').then(function(response) {
      self.dataSource = self.dataSource.cloneWithRows(response);
    });
  }

}

const questionStore = new QuestionStore();
export default questionStore;
