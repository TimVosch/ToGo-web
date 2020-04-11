import { h, FunctionComponent, FunctionalComponent } from "preact";

interface InputGroupProps {
  name?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  class?: string;
}

const TextInput: FunctionalComponent<InputGroupProps> = ({
  name,
  type,
  label,
  placeholder,
  ...props
}) => {
  const classes = "flex flex-col " + props.class;
  return (
    <div class={classes}>
      <label class="mb-1 px-1 text-gray-500 uppercase font-semibold tracking-wide">
        {label || "Input:"}
      </label>
      <input
        type={type || "text"}
        name={name}
        placeholder={placeholder || "Enter here..."}
        class="border-b p-1"
      />
    </div>
  );
};

interface LoginFormProps {
  onLogin?: () => void;
}

export const LoginForm: FunctionComponent<LoginFormProps> = ({ onLogin }) => (
  <div class="flex flex-col w-1/2 mx-auto mt-5 pb-3 shadow-md rounded-lg overflow-hidden">
    <div className="mb-4 border-b bg-teal-500 font-semibold text-white p-3 text-center">
      Login
    </div>
    <div className="px-3">
      <TextInput
        name="email"
        label="Your email:"
        type="email"
        placeholder="example@email.com"
        class="mb-5"
      />
      <TextInput
        name="password"
        label="Your password:"
        placeholder=""
        type="password"
        class="mb-5"
      />
      <button
        onClick={onLogin}
        class="py-2 px-3 border border-teal-600 bg-teal-500 text-white rounded-md hover:bg-teal-400 transition-bg duration-100"
      >
        Login
      </button>
    </div>
  </div>
);
