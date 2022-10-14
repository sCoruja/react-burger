import React, { useEffect, useMemo } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Login.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/actions/user";

export const Login = () => {
  const { constructorItems, bun } = useSelector((store) => store.cart);
  const [form, setValue] = React.useState({ email: "", password: "" });
  const [isPasswordHidden, setPasswordHidden] = React.useState(true);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    isLogged,
    loginRequest,
    loginFailed,
    accessToken,
    refreshToken,
  } = useSelector((store) => store.user);
  const isValid = useMemo(() => form.email && form.password, [form]);
  const handleChange = (e) => [
    setValue({ ...form, [e.target.name]: e.target.value }),
  ];
  const handleIconClick = (e) => {
    setPasswordHidden(!isPasswordHidden);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      dispatch(login(form.email, form.password));
    }
  };
  useEffect(() => {
    if (isLogged) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      history.push(location?.state?.from || "/");
    }
  }, [isLogged]);
  return (
    <section className={styles.container}>
      <h2 className="text text_type_main-medium mb-6">Вход</h2>
      {loginFailed && <p className={styles.errorMessage}>Произошла ошибка</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.field}>
          <Input
            type={"email"}
            placeholder={"E-mail"}
            onChange={handleChange}
            value={form.email}
            name={"email"}
            error={false}
            errorText={"Введите корректный email"}
          />
        </fieldset>
        <fieldset className={styles.field}>
          <Input
            type={isPasswordHidden ? "password" : "text"}
            placeholder={"Пароль"}
            onChange={handleChange}
            value={form.password}
            name={"password"}
            icon={isPasswordHidden ? "ShowIcon" : "HideIcon"}
            onIconClick={handleIconClick}
            error={false}
            errorText={"Ошибка"}
          />
        </fieldset>
        <fieldset className={styles.button}>
          <Button type="primary" size="medium" htmlType="submit">
            {loginRequest ? "Загрузка..." : "Войти"}
          </Button>
        </fieldset>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        Вы новый пользователь?{" "}
        <Link
          to="/register"
          className={
            styles.link + " text text_type_main-default text_color_accent"
          }
        >
          Зарегестрироваться
        </Link>
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Забыли пароль?{" "}
        <Link
          to="/forgot-password"
          className={
            styles.link + " text text_type_main-default text_color_accent"
          }
        >
          Восстановить пароль
        </Link>
      </p>
    </section>
  );
};
