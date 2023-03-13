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

////////////////////// use this to include modal //////////////////////

// const [loginOpen, setLoginOpen] = React.useState(false);

{/* <MyVerticallyCenteredModal
show={props.modalShow}
onHide={props.onHide}
heading={'Register'}
body={Body}
size={props.size}
/> */}

{/* <Login
modalShow={loginOpen}
onHide={() => setLoginOpen(false)}
/> */}

//////////////////////////////////////////////////////////////////////

export default MyVerticallyCenteredModal;