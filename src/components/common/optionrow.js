// optionrow  component
import { Component, Globals } from '/system/erbium';

class OptionRow extends Component {

  generateView(props) {
    this.row = Ti.UI.createTableViewRow(styles.tableRow);
    this.row.title = props.title;
    this.row.rowid = props.rowid;

    const view = Ti.UI.createView(styles.rowView);
    const title = Ti.UI.createLabel(styles.labelStyle);
    title.text = props.title;

    view.add(title);
    this.row.add(view)

    return this.row;
  }

}

const styles = {

  tableRow: {
    width: Ti.UI.FILL,
    height:Ti.UI.SIZE,
    leftImage: "/images/red-marker.png"
  },

  rowView: {
    height: 60,
    left: 60,
    right: 0
  },

  labelStyle: {
    color: '#FFFF00',
    font: {fontSize: 18},
    textAlign: 'left',
    height: Ti.UI.SIZE,
    width: Ti.UI.FILL
  }


};

export default OptionRow;
