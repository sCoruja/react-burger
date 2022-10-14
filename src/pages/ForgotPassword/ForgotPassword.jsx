import React, { useEffect } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ForgotPassword.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { forgotPassword } from "../../services/actions/user";
import { useDispatch, useSelector } from "react-redux";

export const ForgotPassword = () => {
  const [form, setValue] = React.useState({ email: "" });
  const { isLogged } = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const { forgotPasswordRequest, forgotPasswordFailed } = useSelector(
    (store) => store.user
  );
  const handleChange = (e) => [
    setValue({ ...form, [e.target.name]: e.target.value }),
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email) {
      dispatch(forgotPassword(form.email));
      history.push("/reset-password");
    }
  };

  useEffect(() => {
    if (isLogged) {
      history.push("/profile");
    }
  }, [isLogged]);
  return (
    <section className={styles.container}>
      {forgotPasswordFailed && (
        <p className={styles.errorMessage}>Произошла ошибка</p>
      )}
      <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.field}>
          <Input
            type={"email"}
            placeholder={"Укажите e-mail"}
            onChange={handleChange}
            value={form.email}
            name={"email"}
            error={false}
            errorText={"Введите корректный email"}
          />
        </fieldset>
        <fieldset className={styles.button}>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            disabled={!form.email}
          >
            {forgotPasswordRequest ? "Загрузка..." : "Восстановить"}
          </Button>
        </fieldset>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        Вспомнили пароль?{" "}
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
