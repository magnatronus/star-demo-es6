// detail row component
import { Component, Globals } from '/system/erbium';

class DetailRow extends Component {

  generateView(props) {
    const row = Ti.UI.createTableViewRow(styles.tableRow);
    const view = Ti.UI.createView(styles.rowView);

    const key = Ti.UI.createLabel(styles.keyStyle);
    key.text = props.key + ":";
    view.add(key);

    const value = Ti.UI.createLabel(styles.valueStyle);
    value.text = props.value;
    view.add(value);

    row.add(view)

    return row;
  }

}

const styles = {

  tableRow: {
    width: Ti.UI.FILL,
    height:Ti.UI.SIZE,
  },

  rowView: {
    height: Ti.UI.SIZE,
    left: 20,
    right: 0
  },

  keyStyle: {
    top: 5,
    color: '#FF0000',
    font: {fontSize: 15},
    textAlign: 'left',
    height: Ti.UI.SIZE,
    width: Ti.UI.FILL
  },

  valueStyle: {
    top: 25,
    left: 5,
    color: '#FFFF00',
    font: {fontSize: 15},
    textAlign: 'left',
    height: Ti.UI.SIZE,
    width: Ti.UI.FILL
  }

};

export default DetailRow;
