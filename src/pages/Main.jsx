import React, { Component } from 'react';
// eslint-disable-next-line
import { Form, InputGroup, Button, Container, Col } from 'react-bootstrap';
import SearchBox from '../components/landing_page/SearchBox';
import PopularDestinations from '../components/landing_page/PopularDestinations';

export default class Main extends Component {
  render() {
    return (
      <>
        <SearchBox/>
        <PopularDestinations/>
      </>
    )
  }
}



