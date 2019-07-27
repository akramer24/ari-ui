import React, { useState } from 'react';
import { Button, Modal } from '../components';

const ModalExample = props => {
  const [visible, setVisible] = useState(false);
  const onClose = () => setVisible(false);

  return (
    <div>
      <Modal onClose={onClose} visible={visible}>
        <div>Hi, I am a modal</div>
      </Modal>
      <Button onClick={() => setVisible(true)}>Show modal</Button>
    </div>
  )
}

export default ModalExample;