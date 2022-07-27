import { ComponentType, FC, ReactComponentElement, ReactElement } from "react";
import { Navigate } from "react-router-dom";

type WithAuthProps = {
  children?: JSX.Element;
};

/**
 * HOC that check if there is an user authenticated. If there isn't, it redirects to login page.
 *
 * @param WrappedComponent
 * @returns
 */
export default function withAuth<T extends object>(
  WrappedComponent: ComponentType<T>
) {
  return (props: T & WithAuthProps) =>
    !localStorage.getItem("token") ? (
      <Navigate to="/login" replace={true} />
    ) : (
      <WrappedComponent {...(props as T)} />
    );
}
