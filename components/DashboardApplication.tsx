"use client";

import React, { useEffect, useState } from "react";
import FullPageLoader from "./FullPageLoader";
const DashboardApplication = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 2 seconds timer

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div>
        <FullPageLoader />
      </div>
    );
  }
  return <div>{children}</div>;
};

export default DashboardApplication;
