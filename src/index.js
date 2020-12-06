import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function SignUpForm({ isVisible, onSignUp }) {
  const emailInput = useRef();
  useEffect(() => {
    if (isVisible) {
      emailInput.current.focus();
    }
  }, [isVisible]);
  return (
    <form style={{ display: isVisible ? "block" : "none" }}>
      <labeL>
        Email
        <input ref={emailInput} />
      </labeL>
      <br />
      <button onClick={onSignUp}>Sign up</button>
    </form>
  );
}

function App() {
  const [isSignUpFormVisible, setSignUpFormVisibility] = useState(false);
  const timeoutId = useRef();
  useEffect(() => {
    timeoutId = setTimeout(() => setSignUpFormVisibility(true), 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="App">
      <SignUpForm
        isVisible={isSignUpFormVisible}
        onSignUp={(event) => {
          event.preventDefalt();
          setSignUpFormVisibility(false);
          clearTimeout(timeoutId);
        }}
      />
      <button onClick={() => setSignUpFormVisibility((prev) => !prev)}>
        Show sign up form
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
