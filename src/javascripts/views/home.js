import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import WelcomeMessage from '../components/welcome-message';
import styles from './home.scss';

import '@zendeskgarden/react-grid/dist/styles.css';
import '@zendeskgarden/react-textfields/dist/styles.css';

import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { TextField, Label, Hint, Input, Message } from '@zendeskgarden/react-textfields';

export class HomeView extends Component {

  render () {
    return (
      <Grid>
        <Row justifyContent="center">
          <Col md="auto">
            <WelcomeMessage />
          </Col>
        </Row>
        <Row justifyContent="center">
          <Col md="auto">
            <Link className={ styles.toMessage } to='/insert'>Navigate to Insert Message</Link>
          </Col>
        </Row>
        <Row justifyContent="center">
          <Col md="auto">
            <TextField>
              <Label>Example Garden Input</Label>
              <Hint>Hinty hint</Hint>
              <Input placeholder="Accepts all native input props" />
              <Message>Default message styling</Message>
            </TextField>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HomeView;