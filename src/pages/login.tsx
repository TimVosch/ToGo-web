import { h, Component, ComponentChild, Fragment } from "preact";
import { Navigation } from "../components/navigation";
import { LoginForm } from "../components/login-form";

export class LoginPage extends Component {
  render(): ComponentChild {
    return (
      <Fragment>
        <Navigation />
        <LoginForm />
      </Fragment>
    );
  }
}
