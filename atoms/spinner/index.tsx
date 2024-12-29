import classNames from "classnames";
import { Icon, iconTypes } from "ui/atoms/icon";
import React, { CSSProperties } from "react";
import classes from "./styles.module.scss";

const Spinner = ({
  size = 40,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: CSSProperties;
}): JSX.Element => {
  const clazz = classNames(classes.spinner, className);
  return (
    <div style={style} className={clazz}>
      <Icon type={iconTypes.loading} size={size} />
    </div>
  );
};

export default Spinner;
