import {observable} from 'mobx';
import {ListView} from 'react-native';
import Rest from 'fetch-on-rest';

class QuestionStore {

  @observable dataSource;
  @observable question = {};

  constructor(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows([]);
    this.api = new Rest("http://localhost:8000/");
    this.refresh();
  }

  findOne(id){
    //initiate this to self variable
    const self = this;

    //call api GET to http://localhost:8000/question/{id} to fetch single obj
    this.api.get('question/'+ id).then(function(response){
      //set single obj response to store.question reactively
      self.question = response;
    });
  }

  add(doc){
    this.api.post('question', doc);
  }

  update(id, doc){
    //initiate this to self variable
    const self = this;

    //call api PUT to http://localhost:8000/question/{id}, with passed data
    this.api.put('question/'+ id, doc).then(function(){
      //call method findOne from this class
      self.findOne(id);
    });
  }

  search(search){
    //initiate this to self variable
    const self = this;

    //call api http://localhost:8000/question?search=search
    //then set the response to dataSource to refresh it reactively
    this.api.get('question', {search: search}).then(function(response) {
      self.dataSource = self.dataSource.cloneWithRows(response);
    });
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
