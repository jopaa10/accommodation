import "./pageTitle.scss";

export function PageTitle({ pageTitle }) {
  return (
    <div className="page-title">
      <h2>{pageTitle}</h2>
    </div>
  );
}
