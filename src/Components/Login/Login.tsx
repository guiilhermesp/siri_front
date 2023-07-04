import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAccount } from "../../Services/accountSlice";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const Login: React.FC = () => {
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch<any>(fetchAccount(form.login, form.password));
    setForm({
      login: "",
      password: "",
    });
    navigate("/pedidos");
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Login:
            <Input
              className={styles.input}
              name="login"
              value={form.login}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <Input
              className={styles.input}
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <Button className={styles.button}>Acessar</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
