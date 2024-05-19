import "./index.scss";

export const Layout = (props) => {
  return (
    <div className="layout">
      <header className="layout-header"></header>
      <main className="layout-content">{props.children}</main>
    </div>
  );
};
