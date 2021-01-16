import React, { Component } from 'react'
import { Button, Modal, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { closeReserveTimedOutModal } from '../../actions/modalActions/modalActions'

class ReserveTimedOutModal extends Component {
    handleClose = () => {
        this.props.closeReserveTimedOutModal();
    };
    render() {
        return (
            <>
                <Modal show={this.props.ReserveTimedOutModal}>
                    <Modal.Header closeButton onClick={this.handleClose}>
                        <Modal.Title>Accept Reserve</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Your trip reservation timed out - prices may have changed and you need to update to continue.
                        <Row>
                            <Col style={{paddingRight: "5px"}}>
                                <Button variant="secondary" type="cancel" onClick={this.handleClose}>
                                    Continue
                                </Button>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ReserveTimedOutModal: state.modals.reserveTimedOutModal
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        closeReserveTimedOutModal: () => dispatch(closeReserveTimedOutModal())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReserveTimedOutModal)