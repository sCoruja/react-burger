import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Login.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

export const Login = () => {
  const [form, setValue] = React.useState({ email: "", password: "" });

  return (
    <>
      <section className={styles.container}>
        <h2 className="text text_type_main-medium mb-6">Вход</h2>
        <form className={styles.form}>
          <fieldset className={styles.field}>
            <Input
              type={"email"}
              placeholder={"E-mail"}
              onChange={(e) => setValue({ ...form, email: e.target.value })}
              value={form.email}
              name={"email"}
              error={false}
              errorText={"Введите корректный email"}
            />
          </fieldset>
          <fieldset className={styles.field}>
            <Input
              type={"password"}
              placeholder={"Пароль"}
              onChange={(e) => setValue({ ...form, password: e.target.value })}
              value={form.password}
              name={"name"}
              icon={"ShowIcon"}
              error={false}
              errorText={"Ошибка"}
            />
          </fieldset>
          <fieldset className={styles.button}>
            <Button type="primary" size="medium">
              Войти
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
    </>
  );
};
