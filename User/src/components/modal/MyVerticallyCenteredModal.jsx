/* eslint-disable no-lone-blocks */
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.heading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.body}
            </Modal.Body>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;