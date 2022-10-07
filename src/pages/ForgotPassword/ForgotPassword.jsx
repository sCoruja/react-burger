import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ForgotPassword.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  const [form, setValue] = React.useState({ email: "" });

  return (
    <>
      <section className={styles.container}>
        <h2 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h2>
        <form className={styles.form}>
          <fieldset className={styles.field}>
            <Input
              type={"email"}
              placeholder={"Укажите e-mail"}
              onChange={(e) => setValue({ ...form, email: e.target.value })}
              value={form.email}
              name={"email"}
              error={false}
              errorText={"Введите корректный email"}
            />
          </fieldset>
          <fieldset className={styles.button}>
            <Button type="primary" size="medium">
              Восстановить
            </Button>
          </fieldset>
        </form>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?{' '}
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
