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

function App() {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    setTheme('dark');
  }, []);

  return (
    <Layout>
      <Sidebar className="ez-min-w-72" onBackdropClick={() => setVisible(false)} visible={visible}>
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
            color="white"
            name="bars"
          />
        </span>

        <Card>
          <Card.Body>
            <Button
              label="Button"
            />

            <Dropdown
              placeholder="Pick an item"
            />
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  )
}


export default App;