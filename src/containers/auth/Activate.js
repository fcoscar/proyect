import React, { useState } from "react";
import Layout from "../../hocs/Layout";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activate } from "../../redux/actions/auth";

function Activate() {
  const dispatch = useDispatch();
  const params = useParams();
  const uid = params.uid;
  const token = params.token;
  const [activated, setActivated] = useState(false);

  const activationHandler = () => {
    dispatch(activate(uid, token));
    setActivated(true);
  };
  if (activated) {
    return <Navigate to="/signin" />;
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px8 flex items-center">
        <div className="max-w-3xl mx-auto flex items-center">
          <div>
            <p>
              Haz click en el boton de abajo para activar tu cuenta y empezar a
              utilizarla
            </p>
            <button
              onClick={activationHandler}
              type="button"
              className=" px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Activar Cuenta
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Activate;
