import React from "react";
import { FormInput } from "../FormInput";

export class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
      email: "",
      cpf: "",
      phone: ""
    };
  }

  handleChange = (name, value) => this.setState({ [name]: value });

  validateEmail = email => email.includes("@") && email.includes(".");

  handleSubmitForm = event => {
    event.preventDefault();
    const { name, city, email, cpf, phone } = this.state;
    if (!this.validateEmail(email)) {
      return alert("Por favor insira um e-mail válido.");
    }
    if (!name || !city || !email || !cpf || !phone) {
      return alert("por favor, preencha todos os campos");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <FormInput
          label="Nome completo:"
          value={this.state.name}
          handleChange={this.handleChange}
          name="name"
        />
        <FormInput
          label="Cidade:"
          value={this.state.city}
          handleChange={this.handleChange}
          name="city"
        />
        <FormInput
          inputType="email"
          label="Email:"
          placeholder="email@email.com"
          value={this.state.email}
          handleChange={this.handleChange}
          name="email"
        />
        <FormInput
          label="CPF:"
          placeholder="000.000.000-00"
          value={this.state.cpf}
          handleChange={this.handleChange}
          name="cpf"
        />
        <FormInput
          label="Telefone:"
          placeholder="(xx) xxxxx-xxxx"
          value={this.state.phone}
          handleChange={this.handleChange}
          name="phone"
        />
        <button type="submit">Inscrever</button>
      </form>
    );
  }
}