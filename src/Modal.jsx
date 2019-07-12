import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Modal_react extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

      return (
      <div>
        <Button color="info" onClick={this.toggle}>Register</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Register</ModalHeader>
          <ModalBody>
            <form role="form">
              <div className="form-group">
                <label htmlFor="phone"><span className="glyphicon glyphicon-phone-alt"></span> Phone Number</label>
                <input type="number" className="form-control" id="phone" placeholder="Enter Phone Number"/>
              </div>
              <div className="form-group">
                <label htmlFor="accountnumber"><span className="glyphicon glyphicon-lock"></span>Account Number</label>
                <input type="number" className="form-control" id="accountnumber" placeholder="Enter Account Number"/>
              </div>

            </form>
          </ModalBody>
          <ModalFooter>
           <button type="submit" className="btn btn-info">Register
              </button>{' '}
            <Button color="info" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Modal_react;