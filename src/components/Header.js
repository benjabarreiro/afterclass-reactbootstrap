import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import './Header.css';

export default function Header() {
  return (
    <header>
      <Dropdown>
        <Dropdown.Toggle className="background-color" variant="success" id="dropdown-basic">
          Usuario
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Inicar Sesion</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Crear Cuenta</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Cerrar Sesion</Dropdown.Item>
		  <Dropdown.Item href="#/action-3">Cerrar Sesion</Dropdown.Item>
		  <Dropdown.Item href="#/action-3">Cerrar Sesion</Dropdown.Item>
		  <Dropdown.Item href="#/action-3">Cerrar Sesion</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </header>
  );
}
