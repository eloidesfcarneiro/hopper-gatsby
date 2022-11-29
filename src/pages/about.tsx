import React, { useState, FormEvent } from 'react'
import axios from 'axios';
import Layout from '../components/Layout'

interface FData {
  email: string; message: string;
}

const About = () => {
  const [serverState, setServerState] = useState({ submitting: false, });

  const [state, setState] = React.useState<FData>({
    email: "",
    message: "",
  });

  const [isDirty, setIsDirty] = useState(false);
  const validMessage = isValidMessage(state.message);
  const validEmail = isValidEmail(state.email);
  function isValidMessage(message: string) {
    if (message.length < 2) {
      return "Mensagem precisa de ter mais de 2 letras";
    }
    return null;
  }

  function isValidEmail(email: string) {
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      return "Este email é invalido";
    }

    return null;
  }

  function ErrorMessage({ message }: { message: string | null }) {
    if (message === null) {
      return null;
    }

    return (
      <span className="error">
        {message}
        <style jsx>{`
          .error {
            color: #f11212;
            font-size: 10px;
          }
        `}</style>
      </span>
    );
  }


  const handleServerResponse = (ok: boolean, msg: string, form: FData) => {
    setServerState({
      submitting: false,
    });
    if (ok) {
      alert(msg)
      setState({ email: "", message: "" })
    }
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    setServerState({ submitting: true });
    const data = {
      email: target.email.value,
      message: target.message.value,
    }
    axios({
      method: "post",
      url: "https://getform.io/f/80f4045e-88ec-4eef-9735-3e167944df96",
      data: data
    })
      .then(r => {
        handleServerResponse(true, "Aguarde nosso contato. Obrigado!", data);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, data);
      });
  };

  return (
    <Layout>
      <div>
        <h3>Contato</h3>
        <form onSubmit={handleOnSubmit}>
          <input type="email" name="email" placeholder="Seu Email" id="email"
            value={state.email}
            onChange={(event) =>
              setState({ ...state, email: event.target.value })
            }
          ></input>
          <ErrorMessage message={isDirty ? validEmail : ""} />
          <input
            name="message" placeholder="Sua Menssagem"  id="message"
            value={state.message}
            onChange={(event) =>
              setState({ ...state, message: event.target.value })
            }
            
            ></input>
            <ErrorMessage message={isDirty ? validMessage : null} />
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  )
}

export default About;