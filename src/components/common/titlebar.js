// example titlebar component
import { Component, Globals } from '/system/erbium';
import Events from '/libs/events';

class TitleBar extends Component{

  beforeView() {
    // register a listener to update the titlebar
    Globals.Dispatcher.on(Events.NAV_CHANGE_TITLE, (e) => this.title = e.title);
  }

  generateView(props){

      const view = Ti.UI.createView(styles.titleView);

      //this is the text version of the title bar
      this._title = Ti.UI.createLabel(styles.titleLabel);
      this._title.text = props.title;
      view.add(this._title);

      /** image version
      const titleimage = Ti.UI.createImageView(styles.titleImage);
      view.add(titleimage);
      **/

      // add a left navigate button
      this._leftButton = Ti.UI.createImageView(styles.leftButton);
      this._leftButton.addEventListener('click', () => Globals.Dispatcher.trigger(Events.NAV_LEFTCLICK));
      view.add(this._leftButton);

      // add a right button
      //const rightButton = Ti.UI.createButton(styles.rightButton);
      //rightButton.addEventListener('click', (evt) => Globals.Dispatcher.trigger(Events.NAV_RIGHTCLICK, evt));
      //view.add(rightButton);

      return view;

  }

  set title(value){
    this._title.text = value;
  }


  leftButtonVisible(flag) {
    this._leftButton.visible = flag;
  }


};

const styles = {

  titleView:  {
    backgroundColor: '#000',
    height: 60
  },

  leftButton: {
      left: 10,
      top: 15,
      width: 35,
      image: '/images/back-arrow.png',
      visible: false
  },

  rightButton: {
    right:10,
    title: "About",
    height: 35,
    width: Ti.UI.SIZE,
    backgroundColor: 'transparent'
  },

  titleLabel: {
    top: 20,
    textAlign: 'center',
    width: Ti.UI.FILL,
    height: Ti.UI.SIZE,
    font: {fontFamily: 'Helvetica', fontSize: 18},
    color: '#FFFF00',
  }
};

export default TitleBar;
