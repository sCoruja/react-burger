import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ResetPassword.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const ResetPassword = () => {
  const [form, setValue] = React.useState({ code: "", password: "" });

  return (
    <>
      <section className={styles.container}>
        <h2 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h2>
        <form className={styles.form}>
          <fieldset className={styles.field}>
            <Input
              type={"password"}
              placeholder={"Введите новый пароль"}
              onChange={(e) => setValue({ ...form, password: e.target.value })}
              value={form.password}
              name={"email"}
              error={false}
              icon="ShowIcon"
              errorText={"Введите корректный email"}
            />
          </fieldset>
          <fieldset className={styles.field}>
            <Input
              type={"text"}
              placeholder={"Введите код из письма"}
              onChange={(e) => setValue({ ...form, code: e.target.value })}
              value={form.code}
              name={"code"}
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
          {/* eslint-disable-next-line*/}
          <a
            className={
              styles.link + " text text_type_main-default text_color_accent"
            }
            href="#"
          >
            Войти
          </a>
        </p>
      </section>
    </>
  );
};
