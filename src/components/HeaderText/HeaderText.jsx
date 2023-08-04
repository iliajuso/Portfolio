import React from "react";
import { NavLink } from "react-router-dom";
import s from "./HeaderText.module.sass";

function HeaderText(props) {
  const { title, to } = props;
  return (
    <NavLink to={to} activeclassname={s.active} className={s.HeaderText}>
      {/* <NavLink to={to} activeClassName={s.active} className={s.HeaderText}> */}
      {title}
    </NavLink>
  );
}

export default HeaderText;
