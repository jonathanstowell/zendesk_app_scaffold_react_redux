import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { Notification, Close, Title } from '@zendeskgarden/react-notifications';

import { insertMessage } from '../actions/messages';

import '@zendeskgarden/react-grid/dist/styles.css';
import '@zendeskgarden/react-buttons/dist/styles.css';
import '@zendeskgarden/react-notifications/dist/styles.css';
import styles from './insert-message.scss';

export class InsertMessageView extends Component {

  render () {
    return (
      <Grid>
        <Row justifyContent="center">
          <Col md="auto">
            <Link className={ styles.toHome } to='/'>Go Home { this.props.hasSuccess }</Link>
          </Col>
        </Row>
        <Row justifyContent="center">
          <Col md="auto">
            <Notification type="info">
              <Title>Info Notification</Title>
              <p>Press the button to insert into the ticket editor.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec maximus magna. Aliquam nec tempor magna. Duis sit amet risus et mi accumsan sollicitudin. Proin non sollicitudin tellus, at venenatis orci. Quisque vitae purus eleifend, interdum risus et, tincidunt dui. Etiam eleifend arcu sed nisl interdum, in vehicula nunc sollicitudin. Etiam facilisis diam cursus ex tincidunt, ac sollicitudin massa placerat. Mauris molestie purus in eros ullamcorper commodo. Duis at dolor non erat mattis lobortis. Sed sit amet lectus eget nunc semper porta a vel nisi. Nulla id aliquam tortor. Nulla eget fermentum magna. Nulla facilisi.
              </p>
              <Close onClick={() => alert('closing notification')} aria-label="Close Notification" />
            </Notification>
          </Col>
        </Row>
        <Row justifyContent="center">
          <Col md="auto">
            <Button primary onClick={ this.props.insertMessage }>
              Click to insert message
            </Button>
          </Col>
        </Row>
        <Row justifyContent="center">
          <Col md="auto">
            { this.props.hasSuccess &&
              <Notification type="success">
                <Title>{ this.props.resultMessage }</Title>
              </Notification>
            }
            { !this.props.hasSuccess && 
              <Notification type="error">
                <Title>{ this.props.resultMessage }</Title>
              </Notification>
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}

InsertMessageView.propTypes = {
  insertMessage: PropTypes.func,
  resultMessage: PropTypes.string,
  hasSuccess: PropTypes.bool
};

const mapStateToProps = state => ({
  resultMessage: state.messages.resultMessage,
  hasSuccess: state.messages.hasSuccess
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  insertMessage: () => dispatch(insertMessage('hello world')),
})

export default connect(mapStateToProps, mapDispatchToProps)(InsertMessageView);
