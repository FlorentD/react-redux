import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <div className="absolute w-full h-screen z-0 flex">
        <div className="bg-blue-800 flex-1 h-screen" />
        <div className="bg-blue-100 flex-1 h-screen" />
      </div>
      <div className="relative w-full h-screen bg-blue-100 xl:w-xl m-auto z-10">
        <div className="grid grid-cols-12 gap-4">{children}</div>
      </div>
    </>
  );
};

Layout.Menu = ({ children }) => {
  return (
    <div className="col-start-1 col-end-4 co h-screen bg-blue-800 border-r-8 border-blue-900">
      {children}
    </div>
  );
};

Layout.Body = ({ children }) => {
  return <div className="col-span-9 h-screen bg-blue-100">{children}</div>;
};

export default Layout;
