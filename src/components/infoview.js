import { Component, Globals } from '/system/erbium';
import DetailRow from '/components/common/detailrow';

class DetailInfo extends Component {

  generateView(){
    const view = Ti.UI.createView(styles.listContainer);

    const info = Ti.UI.createLabel(styles.infoLabel);
    view.add(info);

    this.list = Ti.UI.createTableView(styles.optionsList);
    view.add(this.list);

    return view;
  }

  afterView(props) {
    this.displayDetails(props);
  }

  displayDetails(data) {
    const rows = [];
    for(const key in data){
      if(typeof data[key] === 'string' && (key !== 'created' && key !== 'edited') && (data[key].indexOf('http://') === -1)) {
        rows.push(new DetailRow({key: key.split('_').join(' '), value: data[key]}).view);
      }
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
    text: 'Readout data obtained from system.'
  },

  optionsList:{
    top: 5,
    width: Ti.UI.FILL,
    height: Ti.UI.FILL,
    backgroundColor: '#000',
    separatorStyle: Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE
  }

};


export default DetailInfo;
