import { Link, useHistory } from "react-router-dom";
function NotFoundPage() {
    let history = useHistory();
  return (
    <din className="not-found-page">
      <h3
        className="not-found-page__404"
      >404</h3>
      <p className="not-found-page__text">Страница не найдена</p>
    <Link onClick={history.goBack} className="not-found-page__back link">назад</Link></din>
  );
}
export default NotFoundPage;
