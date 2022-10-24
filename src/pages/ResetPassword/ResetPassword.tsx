import React, { ChangeEvent, FormEvent, useEffect, useMemo } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ResetPassword.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../services/actions/user";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { IState, IUserState } from "../../utils/types";

export const ResetPassword = () => {
  const [form, setValue] = React.useState({ code: "", password: "" });
  const [isPasswordHidden, setPasswordHidden] = React.useState(true);
  const isValid = useMemo(() => form.code && form.password, [form]);
  const { isLogged, resetPasswordRequest, resetPasswordFailed } = useSelector<
    IState,
    IUserState
  >((store) => store.user);
  const history = useHistory();

  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => [
    setValue({ ...form, [e.target.name]: e.target.value }),
  ];
  const handleIconClick = () => {
    setPasswordHidden(!isPasswordHidden);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      dispatch(resetPassword(form.password, form.code));
    }
  };

  useEffect(() => {
    if (isLogged) {
      history.push("/profile");
    }
  }, [isLogged, history]);
  return (
    <section className={styles.container}>
      <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
      {resetPasswordFailed && (
        <p className={styles.errorMessage}>Произошла ошибка</p>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.field}>
          <Input
            type={"password"}
            placeholder={"Введите новый пароль"}
            onChange={handleChange}
            value={form.password}
            name={"password"}
            error={false}
            icon={isPasswordHidden ? "ShowIcon" : "HideIcon"}
            onIconClick={handleIconClick}
            errorText={"Введите корректный email"}
          />
        </fieldset>
        <fieldset className={styles.field}>
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={handleChange}
            value={form.code}
            name={"code"}
            error={false}
            errorText={"Введите корректный email"}
          />
        </fieldset>
        <fieldset className={styles.button}>
          <Button
            type="primary"
            size="medium"
            htmlType="submit"
            disabled={!isValid}
          >
            {resetPasswordRequest ? "Загрузка..." : "Восстановить"}
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
