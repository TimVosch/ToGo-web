import { h, FunctionalComponent } from "preact";
import PreactRouter from "preact-router";
import { HomePage } from "./pages/home";
import { ProfilePage } from "./pages/profile";

export const Router: FunctionalComponent = () => (
  <PreactRouter>
    <ProfilePage path="/profile" />
    <HomePage path="/" />
  </PreactRouter>
);
