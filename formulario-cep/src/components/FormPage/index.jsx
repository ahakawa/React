import React from "react";
import AddressForm from "../../form/AddressForm";
import { RegisterForm } from "../RegisterForm";


export const FormPage = () => (
  <div className="container">
    <h3>Cadastro de alunas</h3>
    <RegisterForm />
    <AddressForm /> 
      
  </div>
);