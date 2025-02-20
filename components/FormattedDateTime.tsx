import React from "react";

const FormattedDateTime = ({className}: {className?: string}) => {
  return (
      <div className={className + " " + ""}>
        3:31am, 15 Feb
      </div>
  );
};

export default FormattedDateTime;
