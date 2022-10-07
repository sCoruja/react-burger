import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Register.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

export const Register = () => {
  const [form, setValue] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <>
      <section className={styles.container}>
        <h2 className="text text_type_main-medium mb-6">Регистрация</h2>
        <form className={styles.form}>
          <fieldset className={styles.field}>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={(e) => setValue({ ...form, name: e.target.value })}
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
              onChange={(e) => setValue({ ...form, email: e.target.value })}
              value={form.email}
              name={"email"}
              error={false}
              errorText={"Ошибка"}
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
              Зарегистрироваться
            </Button>
          </fieldset>
        </form>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?{' '}
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
    </>
  );
};