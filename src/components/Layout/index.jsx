import "./index.scss";

export const Layout = (props) => {
  return (
    <div className="layout">
      <div className="layout-content">{props.children}</div>
    </div>
  );
};
