import axios from "axios";
import * as React from "react";

interface InputElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement;
  passwordInput: HTMLInputElement;
}

interface FormElement extends HTMLFormElement {
  readonly elements: InputElements;
}

function Login() {
  const [state, setState] = React.useState({
    resolved: false,
    loading: false,
    error: null,
  });

  function handleSubmit(event: React.FormEvent<FormElement>) {
    event.preventDefault();
    const { usernameInput, passwordInput } = event.currentTarget.elements;

    setState({ loading: true, resolved: false, error: null });

    axios
      .post("/api/login", {
        username: usernameInput.value,
        password: passwordInput.value,
      })
      .then((r) => {
        setState({ loading: false, resolved: true, error: null });
        window.localStorage.setItem("token", r.data.token);
      })
      .catch((error) => {
        setState({ loading: false, resolved: false, error: error.message });
      });
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-3"
      >
        <div className="flex gap-3">
          <label htmlFor="usernameInput">Username</label>
          <input
            id="usernameInput"
            className="rounded-md border-2 border-black px-2 focus:border-purple-500 focus:outline-none"
          />
        </div>
        <div className="flex gap-3">
          <label htmlFor="passwordInput">Password</label>
          <input
            id="passwordInput"
            type="password"
            className="rounded-md border-2 border-black px-2 focus:border-purple-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="max-w-36 rounded-md bg-purple-500 px-4 py-2 text-white"
        >
          Submit{state.loading ? "..." : null}
        </button>
      </form>
      {state.error ? <div role="alert">{state.error}</div> : null}
      {state.resolved ? (
        <div role="alert">Congrats! You&apos;re signed in!</div>
      ) : null}
    </div>
  );
}

export default Login;
