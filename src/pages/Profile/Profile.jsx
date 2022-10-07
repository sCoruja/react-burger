import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Profile.module.css";
import {
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const Profile = () => {
  const [form, setValue] = React.useState({ name: "Марк", email: 'test@ya.ru',password: '******' });

  return (
    <>
      <section className={styles.section}>
        <aside className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.item}>
              {/* eslint-disable-next-line*/}
              <a className={styles.link + ' text text_type_main-medium text_color_primary'} href="#">Профиль</a>
            </li>
            <li className={styles.item}>
              {/* eslint-disable-next-line*/}
              <a className={styles.link + ' text text_type_main-medium text_color_primary'} href="#">История заказов</a>
            </li>
            <li className={styles.item}>
              {/* eslint-disable-next-line*/}
              <a className={styles.link + ' text text_type_main-medium text_color_primary'} href="#">Выход</a>
            </li>
          </ul>
          <p className={styles.text + ' text text_type_main-default text_color_inactive'}>В этом разделе вы можете изменить свои персональные данные</p>
        </aside>
        <main>
          <form className={styles.form}>
            <fieldset  className={styles.fieldset}>
              <Input
                type={"text"}
                placeholder={"Имя"}
                onChange={(e) => setValue({ ...form, name: e.target.value })}
                value={form.name}
                name={"name"}
                error={false}
                errorText={"Ошибка"}
                icon="EditIcon"
                disabled
                onIconClick={()=>{}}
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
                icon="EditIcon"
                disabled
                onIconClick={()=>{}}
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
                icon="EditIcon"
                disabled
                onIconClick={()=>{}}
              />
            </fieldset>
          </form>
        </main>
      </section>
    </>
  );
};
