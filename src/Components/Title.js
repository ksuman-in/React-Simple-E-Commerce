import React from "react";

const Title = props => {
  const { name, title } = props;
  return (
    <div className="row">
      <div className="col-10 mx-auto my-1 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
};

export default Title;
