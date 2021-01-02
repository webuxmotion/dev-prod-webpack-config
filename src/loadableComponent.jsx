import React from 'react';
import loadable from "@loadable/component";
import Loading from "./Loading.jsx";

const LoadableComponent = loadable(() => import("./Dashboard.jsx"), {
  fallback: <Loading />
});

export default class LoadableDashboard extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}