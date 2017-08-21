// @flow

import React from 'react';

import Social from '../Social';

import './SocialBlock.css';

export default () => (
  <div className="SocialBlock">
    <Social type='logo' link='http://www.expressnews.com/' />
    <Social type='facebook' link='http://www.expressnews.com/40-days-of-mourning/' />
    <Social type='twitter' link='http://www.expressnews.com/40-days-of-mourning/' />
    <Social type='reddit' link='http://www.expressnews.com/40-days-of-mourning/' />
  </div>
); 