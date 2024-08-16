import {
  Button,
  Card,
  Container,
  Dropdown,
  Layout,
  NavGroup,
  NavLink,
  Sidebar,
  Toast
} from "@lib/components";
import { combineClassName, setTheme } from "@lib/utils";
import { useEffect, useState } from "react";
import Icon from "elevz-icon";
import Buttons from "./pages/Buttons";
import { useToast } from "@lib/hooks";

function App() {
  const toast = useToast();
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    setTheme('dark');
  }, []);

  return (
    <Layout>
      <Sidebar
        className={combineClassName("w-80 p-5", [!visible, "hidden"])}
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

      <Container className="gap-4">
        <span onClick={() => {
          setVisible(!visible); console.log("clicked");
        }} className="cursor-pointer">
          <Icon
            className="text"
            name="bars"
          />
        </span>

        <Buttons />

        <Card className="w-fit shadow">
          <Card.Body>
            <Button
              label="Show Toast"
              onClick={() => toast({
                message: 'Hello from toast',
                indicator: true
              })}
            />

            <Dropdown
              placeholder="Pick an item"
              options={Array.from({ length: 8 }).map((_, i) => "Item " + (i + 1))}
            />
          </Card.Body>
        </Card>

        <Toast
          message="Hello from Toast"
          position="top-center"
          onCloseClick={() => { }}
          visible
        />
      </Container>
    </Layout>
  )
}


export default App;