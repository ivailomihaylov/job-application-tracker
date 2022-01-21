import React from "react";

const Loader = ({ isLoading }) => {
  const containerStyle = {
    position: "fixed",
    display: "flex",
    zIndex: "1000",
    height: "100vh",
    width: "100vw",
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%)",
  };

  const spinnerStyle = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, 0)",
  };

  return (
    isLoading && (
      <div>
        {+(isLoading === true) ? (
          <div style={containerStyle}>
            <div style={spinnerStyle}>
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    )
  );
};

export default Loader;
