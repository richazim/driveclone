import React from "react";
import {formateDate} from "@/lib/utils";

const FormattedDateTime = ({className, date}: {className?: string, date: string}) => {

  return (
      <div className={className + " " + ""}>
          {formateDate(date)}
      </div>
  );
};

export default FormattedDateTime;
