import React from "react";
import "./Main.css";

function Main() {
  return (
    <>
      <div className="block">
        <h1 className="h1">Войти</h1>
        <form className="form">
          <label className="label" for="specialty">
            Выберите вашу специальность
          </label>
          <select className="input select" id="specialty">
            <option value="">Тренер</option>
            <option value="">Ученик</option>
          </select>
          <label className="label" for="mail">
            Ваш e-mail
          </label>
          <input className="input" id="mail" type="email" />
          <label className="label" for="pass">
            Пароль
          </label>
          <input className="input input_pass" id="pass" type="password" />
          <a className="a" href="#" >Забыли пароль?</a>
        </form>
      </div>
    </>
  );
}

export default Main;
