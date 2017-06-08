// Test cross platform stack navigator using views
import { Component, Globals } from '/system/erbium';
import TitleBar from '/components/common/titlebar';
import Events from '/libs/events';

class StackNavigator extends Component {

  // not really needed
  constructor(props){
      super(props);
  }

  beforeView() {
    this.stack = [];
    Globals.Dispatcher.on(Events.NAV_LEFTCLICK, this.closeView.bind(this));
    Globals.Dispatcher.on(Events.NAV_OPENVIEW, (e) => {this.openView.bind(this)(e)});;
  }

  generateView(props) {

    const navigator = Ti.UI.createWindow(styles.navigatorStyle);

    // creat title bar
    this.titlebar = new TitleBar({title:""});
    navigator.add(this.titlebar.view);

    // create container view
    this.containerview = Ti.UI.createView(styles.rootViewStyle);
    navigator.add(this.containerview);

    // if default view defined add it now
    if(props.default){
      this.openView({view: props.default, title: ''});
    }

    // now return
    return navigator;

  }


  // Add a view to the stack
  openView({view, title, props}) {

    const that = this;
    props = props||{};

    // create components and push ui object on stack
    const comp = new view(props).view;
    this.stack.push({
      ui: comp,
      title: title
    });

    // slide the new view in and set the title
    comp.left = 300;
    this.containerview.add(comp);
    comp.animate({
      left:0,
      duration:400,
      curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
    }, () => {
        Globals.Dispatcher.trigger(Events.NAV_CHANGE_TITLE, {title: title})
        that.titlebar.leftButtonVisible((that.stack.length>1));
    });

  }

  // pop the top view
  closeView(){
    const that = this;
  	if(this.stack.length > 1){
      const comp = this.stack.pop();
      const previoustitle = this.stack[that.stack.length -1].title;
      this.titlebar.leftButtonVisible((that.stack.length>1));
      Globals.Dispatcher.trigger(Events.NAV_CHANGE_TITLE, {title: previoustitle})
  		comp.ui.animate({
        left:300,
        duration:400,
        curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
      }, () => {
  			that.containerview.remove(comp.ui);
  	  });
  	}
  }

}


const styles = {

  navigatorStyle: {
    layout: 'vertical',
    height: Ti.UI.FILL,
    width: Ti.UI.FILL,
    backgroundColor: '#000'
  },

  rootViewStyle :{
    height: Ti.UI.FILL,
    width: Ti.UI.FILL,
    backgroundColor: '#000'
  }

};

export default StackNavigator;
