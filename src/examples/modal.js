import React, { useState } from 'react';
import { Button, Modal } from '../components';

const ModalExample = props => {
  const [visible, setVisible] = useState(false);
  const onClose = () => setVisible(false);

  return (
    <div>
      <Modal
        footer={
          <div className="ari-ui-flow-right">
            <Button style={{ marginRight: 5 }} kind="danger">Cancel</Button>
            <Button kind="primary">Save</Button>
          </div>
        }
        onClose={onClose}
        title="Example modal"
        visible={visible}
      >
        <div>Hi, I am a modal</div>
      </Modal>
      <Button onClick={() => setVisible(true)}>Show modal</Button>
    </div>
  )
}

export default ModalExample;