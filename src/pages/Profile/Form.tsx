import React, { FormEvent, SyntheticEvent, useEffect } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Profile.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { updateUserThunk } from "../../services/actions/user";
import { useDispatch, useSelector } from "../../services/hooks";

export const Form = () => {
  const { userName, email, accessToken } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [isFormActive, setFormActive] = React.useState(false);
  const [form, setValue] = React.useState({
    name: userName,
    email: email,
    password: "",
  });
  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    const formData = {
      ...form,
      password: form.password ? form.password : undefined,
    };
    dispatch(updateUserThunk(accessToken, formData));
    setFormActive(false);
  };
  const handleCancel = (e: SyntheticEvent) => {
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
          icon={!isFormActive ? "EditIcon" : undefined}
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
          icon={!isFormActive ? "EditIcon" : undefined}
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
          icon={!isFormActive ? "EditIcon" : undefined}
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
