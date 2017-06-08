import { Component, Globals } from '/system/erbium';
import SWAPI from '/libs/swapi-api';
import OptionRow from '/components/common/optionrow';
import DetailList from '/components/detaillist';
import Events from '/libs/events';

class OptionsList extends Component {

  beforeView() {
    this.api = new SWAPI();
  }

  generateView(props){
    const view = Ti.UI.createView(styles.listContainer);

    const info = Ti.UI.createLabel(styles.infoLabel);
    view.add(info);

    this.list = Ti.UI.createTableView(styles.optionsList);
    this.list.addEventListener('click', (evt) => Globals.Dispatcher.trigger(Events.NAV_OPENVIEW, {view: DetailList, props: { cat: evt.row.title}, title: `Star Wars ${evt.row.title}`}));
    view.add(this.list);

    return view;
  }

  afterView() {
      this.api.availableInfo()
        .then( (res) => this.populateList(res))
        .catch( (error) => console.log(error));
  }

  populateList(data) {
    const rows = [];
    for(const key in data){
      rows.push(new OptionRow({title: key}).view);
    }
    this.list.setData(rows);
  }

}

const styles = {

  listContainer: {
    width: Ti.UI.FILL,
    height: Ti.UI.FILL,
    backgroundColor: '#000',
    layout: 'vertical'
  },

  infoLabel: {
    color: '#FFF',
    font: {fontSize: 16},
    width: Ti.UI.FILL,
    height: Ti.UI.SIZE,
    top:5,
    left: 20,
    right:20,
    text: 'Select a category from the list below to see more detail.'
  },

  optionsList:{
    top: 5,
    width: Ti.UI.FILL,
    height: Ti.UI.FILL,
    backgroundColor: '#000',
    separatorStyle: Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE
  }

};

export default OptionsList;
