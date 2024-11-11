import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { Button } from "primereact/button";

const AuthLayout = () => {
  return (
    <Fragment>
      <div className="">
        This is auth AuthLayout
        <div className="card flex justify-content-center">
          <Button label="Check" icon="pi pi-check" />
        </div>
        <div className="">
          this is auth AuthPage
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default AuthLayout;
