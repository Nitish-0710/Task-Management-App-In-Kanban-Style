import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function MyModal(props) {
    // console.log(props);

    return (
        <Modal
            // {...props}
            show={props.show || props.isEditing}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id={props.header}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        props.modalsubmit();
                    }}>
                    <Form.Group className="mb-3" controlId="task-name">
                        <Form.Label>Task</Form.Label>
                        <Form.Control
                            type="text"
                            value={props.title}
                            onChange={props.titlevalue}
                            placeholder="Learn a Chapter"
                            required={true}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="task-description">
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            value={props.description}
                            onChange={props.descriptionvalue}
                            rows={3}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="task-due-date"
                        style={{ width: "30%" }}>
                        <Form.Label>Task Due Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={props.duedate}
                            onChange={props.datevalue}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button
                    onClick={() => {
                        props.modalsubmit();
                        props.onHide();
                    }}
                    id={props.header}>
                    {props.isEditing ? "Update Task" : "Add Task"}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
