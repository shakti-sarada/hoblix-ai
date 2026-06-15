interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className="
      glass
      glass-hover
      rounded-xl
      px-5
      py-3
      font-medium
      text-white
      "
    >
      {children}
    </button>
  );
};

export default Button;