interface ButtonProps {
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  variation?: string;
  onClick?: () => void;
  small?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  type,
  variation,
  onClick,
  small,
}) => {
  const variationType =
    variation === "secondary"
      ? "bg-rose-500 hover:bg-rose-800"
      : "bg-blue-900 hover:bg-blue-950";
  const isSmall = small ? "px-2" : "px-5";

  
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        variationType +
        ` ${isSmall} py-2  cursor-pointer  duration-300 transition  text-indigo-50 rounded-lg text-sm`
      }
    >
      {children}
    </button>
  );
};

export default Button;
