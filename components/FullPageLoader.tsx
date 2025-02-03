import React from "react";
import { MutatingDots } from "react-loader-spinner";
import Logo from "./logo";
const FullPageLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        <Logo width={40} height={40} />

        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#7DBCCE"
          secondaryColor="#7DBCCE"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default FullPageLoader;
