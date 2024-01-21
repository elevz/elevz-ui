import React from "react";
import { Icon } from "elevz-ui";
import icons from "elevz-ui/src/components/icon/lib";
import styles from "./Icon.module.css";

export default function IconPage() {
  return (
    <div className="page">
      <div className="row">
        {Object.keys(icons).map((key) =>
          <div key={key} className={styles.icon}>
            <Icon name={key} size={40} />
            <span>{key}</span>
          </div>
        )}
      </div>
    </div>
  )
}