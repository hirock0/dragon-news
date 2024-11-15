import { useAppContext } from "../ContextApiProvider";
const PrivateRoute = ({ children }) => {
  const { isLoading } = useAppContext();
  if (isLoading) {
    return (
      <div className=" min-h-screen flex items-center justify-center">
        <div className=" loading loading-spinner"></div>
      </div>
    );
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
