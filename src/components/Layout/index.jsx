import "./index.scss";

export const Layout = (props) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <h2>EVENT PLANNER</h2>
      </header>
      <main className="layout-content">{props.children}</main>
    </div>
  );
};
