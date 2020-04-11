import { h, Component, ComponentChild, Fragment } from "preact";
import { Navigation } from "../components/navigation";
import { LoginForm } from "../components/login-form";
import { LoginService } from "../services/login/login.service";

export class LoginPage extends Component {
  private readonly loginService = new LoginService();

  async login(email: string, password: string): Promise<void> {
    try {
      await this.loginService.login(email, password);
    } catch (e) {
      // eslint-disable-next-line
      console.error(e);
    }
  }

  render(): ComponentChild {
    return (
      <Fragment>
        <Navigation />
        <LoginForm onLogin={this.login.bind(this)} />
      </Fragment>
    );
  }
}
