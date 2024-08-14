import {
  Button,
  Card,
  Container,
  Dropdown,
  Layout,
  NavGroup,
  NavLink,
  Sidebar
} from "@lib/components";
import { setTheme } from "@lib/utils";
import Icon from "elevz-icon";
import { useEffect, useState } from "react";
import Buttons from "./pages/Buttons";

function App() {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    setTheme('dark');
  }, []);

  return (
    <Layout>
      <Sidebar
        className="ez-w-80 ez-p-5"
        onBackdropClick={() => setVisible(false)}
        visible={visible}
      >
        <NavLink
          active
          label="Home"
          leftIcon="home"
        />
        <NavLink
          label="Settings"
          leftIcon="settings"
        />

        <NavGroup leftIcon="calendar" label="Scheduler">
          <NavLink
            label="Create"
          />
          <NavLink
            label="Update"
          />
        </NavGroup>
      </Sidebar>
      <Container>
        <span onClick={() => setVisible(!visible)} className="ez-cursor-pointer">
          <Icon
            className="ez-text"
            name="bars"
          />
        </span>

        <Card className="ez-w-fit">
          <Card.Body>
            <Button
              label="Button"
            />

            <Dropdown
              placeholder="Pick an item"
            />
          </Card.Body>
        </Card>

        <Buttons />
      </Container>
    </Layout>
  )
}


export default App;