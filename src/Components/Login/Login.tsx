import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccount } from "../../Services/Slices/accountSlice";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import logo from "../../Assets/logo.png";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    login: "",
    password: "",
  });
  const { data, error, loading } = useSelector(
    (state: any) => state.accountSlice
  );

  useEffect(() => {
    if (data.client) {
      sessionStorage.setItem("is_admin", data.is_admin);
    }
  }, [data]);

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
        <div>
          <img
            src={logo}
            alt="Logo da defensoria pública"
            width="500"
            height="150"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <Input
              className={styles.input}
              placeholder="Login"
              name="login"
              value={form.login}
              onChange={handleChange}
            />{" "}
            <Input
              className={styles.input}
              placeholder="Senha"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className={styles.info}>
            <div>
              <Input
                type="checkbox"
                name="remember"
                className={styles.remember}
              />
              Lembrar
            </div>
            <a className={styles.forgotPassword}>Esqueci minha senha</a>
          </div>
          <Button className={styles.button}>Acessar</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
