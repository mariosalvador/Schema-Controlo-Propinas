import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC, Suspense } from "react";

import RouteWrapper from "./wrapper";
import { IRouteProps } from "@/interfaces/routes/route";
import { WrapperRouter } from "../wrapperRouter";


const Routing = () => (
  <BrowserRouter>
    <Suspense fallback={<p>carregando...</p>}>
      <Routes>{WrapperRouter().map((path) => build(path))}</Routes>
    </Suspense>
  </BrowserRouter>
);

const build: FC<IRouteProps> = (route) => {
  if (!route.children) {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <RouteWrapper
            visibility={route.visibility}
            element={route.element}
          />
        }
      />
    );
  }

  return (
    <Route
      key={route.path}
      path={route.path}
      element={
        <RouteWrapper visibility={route.visibility} element={route.element} />
      }
    >
      {route.children?.map((outlet) => build(outlet))}
    </Route>
  );
};

export default Routing;
