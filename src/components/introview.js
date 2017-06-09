// Intro View
import Erbium, { Component, Globals } from '/system/erbium';
import Events from '/libs/events';
import OptionsList from '/components/optionslist';
import DemoData from '/assets/demodata.js';


class IntroView extends Component{

  beforeView() {
    this.scrollTime = 12000;
  }

  generateView(){

      const view = Ti.UI.createView(styles.introView);

      // add logo
      const logo = Ti.UI.createImageView(styles.logoImage);
      view.add(logo);

      // add a view
      const infoview = Ti.UI.createView(styles.masterView);

      // Add some info text for scrolling
      this.info = Ti.UI.createLabel(styles.infoLabel);
      infoview.add(this.info);

      // Add github link in
      this.gitlink = Ti.UI.createLabel(styles.gitLink);
      this.gitlink.text = DemoData.gitlink;
      infoview.add(this.gitlink);

      // Add a continue button to the scroller
      this.button = Ti.UI.createButton(styles.continueButton);
      this.button.addEventListener('click', () => Globals.Dispatcher.trigger(Events.NAV_OPENVIEW, {view: OptionsList, title: 'Star Wars Categories'}));
      infoview.add(this.button);

      // Add the info view
      view.add(infoview);

      return view;
  }

  // now view exists we can scroll in
  afterView() {
    const that = this;
    this.info.animate({
      bottom:200,
      duration:this.scrollTime,
      curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
    }, () => {
      that.button.visible = true;
      that.gitlink.visible = true;
    });

  }

}

// Styles are local, but could be from an import ( themes?) or perhaps a combination of both ? (using ...)
const styles = {

  introView: {
    backgroundColor: '#000'
  },

  masterView: {
    height: 300,
    left: 35,
    right: 35,
    top: 110
  },

  logoImage: {
    image: '/images/demoLogo.png',
    width: 250,
    top: 10
  },

  infoLabel: {
    text: (Erbium.isAndroid)?DemoData.introAndroid:DemoData.introIOS,
    bottom: -300,
    width: Ti.UI.FILL,
    height: 400,
    color: "#FFFF00",
    font: {fontSize: 14},
    textAlign: 'center'
  },

  gitLink: {
    visible: false,
    width: Ti.UI.FILL,
    height: Ti.UI.SIZE,
    color: "#FFFF00",
    font: {fontSize: 14},
    textAlign: 'center'
  },

  continueButton: {
    visible: false,
    bottom: 10,
    title: 'Continue..',
    width: Ti.UI.SIZE,
    height: 40,
    backgroundColor: 'transparent'
  }

};



export default IntroView;
