interface ICustomButtonProps {
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
}

export default function CustomButton({
  onClick,
  children,
}: ICustomButtonProps) {
  return (
    <button
      className="mt-4 h-10 rounded-md bg-gray-600 transition-all duration-300 hover:bg-gray-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
