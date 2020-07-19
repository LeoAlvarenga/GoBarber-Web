import React from "react";
import { useAuth } from "../hooks/auth";
import {
  RouteProps as ReactRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from "react-router-dom";

// import { Container } from './styles';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Routes: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...restProps }) => {
  const { user } = useAuth();
  return (
    <ReactDOMRoute 
    {...restProps} 
    render={() => {
        return isPrivate === !!user ? ( 
            <Component />
         ) : (
            <Redirect to={{ pathname: isPrivate ? '/' : 'Dashboard' }} />
         )
    }} 
    />
  );
};

interface RouteProps {}

export default Routes;
