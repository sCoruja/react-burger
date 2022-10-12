import React, { useEffect } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Profile.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateUser } from "../../services/actions/user";
import { useHistory } from "react-router";

export const Profile = () => {
  const { userName, email,accessToken, refreshToken, isLogged } = useSelector(
    (store) => store.user
  );
  const [isFormActive, setFormActive] = React.useState(false);
  const [form, setValue] = React.useState({
    name: userName,
    email: email,
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout(refreshToken));
    localStorage.clear();
  };
  const handleSave = (e) => {
    e.preventDefault();
    const formData = {
      ...form,
      password: form.password ? form.password : undefined,
    };
    dispatch(updateUser(accessToken, formData))
    setFormActive(false);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setValue({
      name: userName,
      email: email,
      password: "",
    });
    setFormActive(false);
  };
  useEffect(() => {
    if (!isLogged) history.push("/login");
  }, [isLogged, history]);
  useEffect(() => {
    setValue({ ...form, name: userName, email: email });
  }, [userName, email]);
  return (
    <>
      <section className={styles.section}>
        <aside className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.item}>
              {/* eslint-disable-next-line*/}
              <a
                className={
                  styles.link + " text text_type_main-medium text_color_primary"
                }
                href="#"
              >
                Профиль
              </a>
            </li>
            <li className={styles.item}>
              {/* eslint-disable-next-line*/}
              <a
                className={
                  styles.link +
                  " text text_type_main-medium text_color_inactive"
                }
                href="#"
              >
                История заказов
              </a>
            </li>
            <li className={styles.item}>
              <a
                className={
                  styles.link +
                  " text text_type_main-medium text_color_inactive"
                }
                href="#"
                onClick={handleLogout}
              >
                Выход
              </a>
            </li>
          </ul>
          <p
            className={
              styles.text + " text text_type_main-default text_color_inactive"
            }
          >
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </aside>
        <main>
          <form className={styles.form}>
            <fieldset className={styles.fieldset}>
              <Input
                type={"text"}
                placeholder={"Имя"}
                onChange={(e) => setValue({ ...form, name: e.target.value })}
                value={form.name}
                name={"name"}
                error={false}
                errorText={"Ошибка"}
                icon={!isFormActive && "EditIcon"}
                disabled={!isFormActive}
                onIconClick={() => {
                  setFormActive(true);
                }}
              />
            </fieldset>
            <fieldset className={styles.fieldset}>
              <Input
                type={"email"}
                placeholder={"Логин"}
                onChange={(e) => setValue({ ...form, email: e.target.value })}
                value={form.email}
                name={"email"}
                error={false}
                errorText={"Ошибка"}
                icon={!isFormActive && "EditIcon"}
                disabled={!isFormActive}
                onIconClick={() => {
                  setFormActive(true);
                }}
              />
            </fieldset>
            <fieldset className={styles.fieldset}>
              <Input
                type={"password"}
                placeholder={"Пароль"}
                onChange={(e) =>
                  setValue({ ...form, password: e.target.value })
                }
                value={form.password}
                name={"name"}
                error={false}
                errorText={"Ошибка"}
                icon={!isFormActive && "EditIcon"}
                disabled={!isFormActive}
                onIconClick={() => {
                  setFormActive(true);
                }}
              />
            </fieldset>
            {isFormActive && (
              <fieldset className={styles.buttons}>
                <Button onClick={handleSave}>Сохранить</Button>
                <Button type="secondary" onClick={handleCancel}>
                  Отмена
                </Button>
              </fieldset>
            )}
          </form>
        </main>
      </section>
    </>
  );
};
