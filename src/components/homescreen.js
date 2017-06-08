// simple home screen
import { Component, Globals } from '/system/erbium';
import Navigator from '/components/common/navigator';
import Intro from '/components/introview';

class HomeScreen extends Component{


  generateView(){
      const navigator = new Navigator({default: Intro});
      Globals.navigator = navigator;
      return navigator.view;
  }

}

export default HomeScreen;
