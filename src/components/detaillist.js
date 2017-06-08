import { Component, Globals } from '/system/erbium';
import SWAPI from '/libs/swapi-api';
import OptionRow from '/components/common/optionrow';
import Events from '/libs/events';
import DetailInfo from '/components/infoview';

class DetailList extends Component {

  beforeView() {
    this.api = new SWAPI();
  }

  generateView(){
    const view = Ti.UI.createView(styles.listContainer);

    const info = Ti.UI.createLabel(styles.infoLabel);
    view.add(info);

    this.list = Ti.UI.createTableView(styles.optionsList);
    this.list.addEventListener('click', (evt) => Globals.Dispatcher.trigger(Events.NAV_OPENVIEW, {view: DetailInfo, props: this.data[evt.row.rowid], title: this.data[evt.row.rowid].name}));
    view.add(this.list);

    return view;
  }

  afterView(props) {
      this.api.categoryList(props.cat)
        .then( (res) => this.populateList(res))
        .catch( (error) => console.log(error));
  }

  populateList({results}) {
    const rows = [];
    this.data = [];
    let id = 0;
    results.forEach( (item) => {
      item.name = (item.title)?item.title:item.name;
      this.data.push(item);
      rows.push(new OptionRow({title: item.name, rowid: id}).view);
      id++;
    });
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
    text: 'Select an item from the list to see more detail.'
  },

  optionsList:{
    top: 5,
    width: Ti.UI.FILL,
    height: Ti.UI.FILL,
    backgroundColor: '#000',
    separatorStyle: Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE
  }

};

export default DetailList;
