import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import CreateDevice from "./CreateDevice"

const App = observer(() => {

  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
      <Container className="d-flex flex-column">

          <Button
              variant={"outline-dark"}
              className="mt-4 p-2"
              onClick={() => setDeviceVisible(true)}
          >
              Добавить устройство
          </Button>
          <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
      </Container>
  );
});


export default App;
