import style from "./InputField.module.css";

const InputField = (props) => {
  return (
    <div className={style.inputField}>
      <label for={props.name}>{props.label}</label>
      <input
        multiple
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        disabled={props.disabled}
        min={props.min}
        max={props.max}
      />
    </div>
  );
};

export default InputField;
