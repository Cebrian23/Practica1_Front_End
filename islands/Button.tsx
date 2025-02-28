import { FunctionComponent, JSX } from "preact";

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  variant: "Mostrar_mas" | "Mostrar_menos";
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const {variant, children, ...rest } = props;
  return (
    <button class={`button ${variant}`} {...rest} >
      {children}
    </button>
  );
}

export default Button;