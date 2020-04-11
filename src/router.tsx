import { h, FunctionalComponent } from "preact";
import PreactRouter from "preact-router";
import { HomePage } from "./pages/home";
import { ProfilePage } from "./pages/profile";
import { LoginPage } from "./pages/login";

export const Router: FunctionalComponent = () => (
  <PreactRouter>
    <LoginPage path="/login" />
    <ProfilePage path="/profile" />
    <HomePage path="/" />
  </PreactRouter>
);
