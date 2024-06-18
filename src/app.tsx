import { Router, A } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <main>
          <A href="/"  activeClass="active">Index</A>
          <A href="/about" activeClass="active" >About</A>
          <A href="/test" activeClass="active" >test</A>
          <Suspense>{props.children}</Suspense>
        </main>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
