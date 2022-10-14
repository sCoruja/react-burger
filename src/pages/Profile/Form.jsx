import React, { useEffect } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Profile.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../services/actions/user";

export const Form = () => {
  const { userName, email, accessToken } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [isFormActive, setFormActive] = React.useState(false);
  const [form, setValue] = React.useState({
    name: userName,
    email: email,
    password: "",
  });
  const handleSave = (e) => {
    e.preventDefault();
    const formData = {
      ...form,
      password: form.password ? form.password : undefined,
    };
    dispatch(updateUser(accessToken, formData));
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
    setValue({ ...form, name: userName, email: email });
  }, [userName, email]);
  return (
    <form className={styles.form} onSubmit={handleSave}>
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
          onChange={(e) => setValue({ ...form, password: e.target.value })}
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
          <Button htmlType="submit">Сохранить</Button>
          <Button type="secondary" onClick={handleCancel}>
            Отмена
          </Button>
        </fieldset>
      )}
    </form>
  );
};
