import React from "react";

import { Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';



export class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      cpf: "",
      phone: ""
    };
  }

  handleChange = (name, value) => this.setState({ [name]: value });

  validateEmail = email => email.includes("@") && email.includes(".");

  handleSubmitForm = event => {
    event.preventDefault();
    const { name, email, cpf, phone } = this.state;
    if (!this.validateEmail(email)) {
      return alert("Por favor insira um e-mail válido.");
    }
    if (!name || !email || !cpf || !phone) {
      return alert("por favor, preencha todos os campos");
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            
            <Form style={{textAlign:'left'}}> 
            <FormGroup>
              <Label for="name">Nome Completo:</Label>
              <Input name="name" value={this.state.name} onChange={e => this.handleChange(e.target)}/>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email:</Label>
              <Input name="email" value={this.state.email} onChange={e => this.handleChange(e.target)}/>
            </FormGroup>
            <FormGroup>
              <Label for="cpf">CPF:</Label>
              <Input name="cpf" value={this.state.cpf} onChange={e => this.handleChange(e.target)}/>
            </FormGroup>
            <FormGroup>
              <Label for="phone">Telefone:</Label>
              <Input name="phone" value={this.state.phone} onChange={e => this.handleChange(e.target)}/>
            </FormGroup>

            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}