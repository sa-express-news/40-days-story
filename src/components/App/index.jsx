// @flow

import React, { Component } from 'react';

import StoryTopContainer from '../StoryTopContainer';
import Sections from '../Sections';
// import Section from '../Section';
import SubscribeFooter from '../SubscribeFooter';
// import ComponentMapper from '../ComponentMapper';

import Story from '../../story.json';
import './App.css';

class App extends Component {
  render() {
    // const pStyle = {
    //   fontStyle: 'italic'
    // };

    return (
      <div className='App'>
          <StoryTopContainer data={Story.top} />
          <div className='Story'>
                      <p className="Paragraph" style={{fontStyle: 'italic'}}>The Express-News also produced <a href="http://www.expressnews.com/40-days-mourning-photo-essay/" style={{color: '#0000ee'}}>a photo essay following Mohamad's family</a> after his death.</p>
            <Sections sections={Story.sections}/>
            <SubscribeFooter link='https://myaccount.expressnews.com/dssSubscribe.aspx?pid=892&z=00000'/>
          </div>
      </div>
    );
  }
}

export default App;