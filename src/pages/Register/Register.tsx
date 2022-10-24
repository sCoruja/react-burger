import React, { ChangeEvent, FormEvent, useEffect, useMemo } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Register.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { register } from "../../services/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { IState, IUserState } from "../../utils/types";

export const Register = () => {
  const [form, setValue] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [isPasswordHidden, setPasswordHidden] = React.useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    isLogged,
    registerRequest,
    registerFailed,
    accessToken,
    refreshToken,
  } = useSelector<IState, IUserState>((store) => store.user);
  const isValid = useMemo(() => form.name && form.email && form.password, [
    form,
  ]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => [
    setValue({ ...form, [e.target.name]: e.target.value }),
  ];
  const handleIconClick = () => {
    setPasswordHidden(!isPasswordHidden);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.name && form.email && form.password) {
      dispatch(register(form.email, form.password, form.name));
    }
  };

  useEffect(() => {
    if (isLogged) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      history.push("/profile");
    }
  }, [isLogged]);
  return (
    <section className={styles.container}>
      <h2 className="text text_type_main-medium mb-6">Регистрация</h2>
      {registerFailed && (
        <p className={styles.errorMessage}>Произошла ошибка</p>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.field}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={handleChange}
            value={form.name}
            name={"name"}
            error={false}
            errorText={"Ошибка"}
          />
        </fieldset>
        <fieldset className={styles.field}>
          <Input
            type={"email"}
            placeholder={"E-mail"}
            onChange={handleChange}
            value={form.email}
            name={"email"}
            error={false}
            errorText={"Ошибка"}
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
            error={false}
            errorText={"Ошибка"}
            onIconClick={handleIconClick}
          />
        </fieldset>
        <fieldset className={styles.button}>
          <Button
            type="primary"
            htmlType="submit"
            size="medium"
            disabled={!isValid}
          >
            {registerRequest ? "Загрузка..." : "Зарегестрироваться"}
          </Button>
        </fieldset>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        Уже зарегистрированы?{" "}
        <Link
          className={
            styles.link + " text text_type_main-default text_color_accent"
          }
          to="/login"
        >
          Войти
        </Link>
      </p>
    </section>
  );
};
