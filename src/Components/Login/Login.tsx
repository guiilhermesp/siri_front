import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccount } from "../../Services/Slices/accountSlice";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import logo from "../../Assets/logo.png";
import { fetchMe } from "../../Services/Slices/meSlice";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });
  // const { data } = useSelector((state: any) => state.accountSlice);
  const response = useSelector((state: any) => state.meSlice);

  useEffect(() => {
    if (response.data.client) {
      sessionStorage.setItem("me", JSON.stringify(response.data));
      navigate("/produtos");
    }
  }, [response]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const options = {
      headers: {
        Authorization: "Basic " + btoa(`${form.username}:${form.password}`),
      },
    };
    dispatch<any>(fetchMe(options));
    setForm({
      username: "",
      password: "",
      remember: false,
    });
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
        <div className={styles.division}>
          <h1 className={styles.title}>SIRI</h1>
          <p className={styles.subtitle}>
            Sistema Integrado de Requisições Internas
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <Input
              className={styles.input}
              placeholder="Usuário"
              name="username"
              value={form.username}
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
            <div className={styles.checkbox}>
              <Input
                type="checkbox"
                name="remember"
                className={styles.remember}
              />
              Lembrar
            </div>
            <a className={styles.forgotPassword}>Esqueci a senha</a>
          </div>
          <Button className={styles.button}>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
