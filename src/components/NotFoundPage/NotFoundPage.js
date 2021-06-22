import { Link, useHistory } from "react-router-dom";
function NotFoundPage() {
    let history = useHistory();
  return (
    <din class="not-found-page">
      <h3
        class="not-found-page__404"
      >404</h3>
      <p class="not-found-page__text">Страница не найдена</p>
    <Link onClick={history.goBack} class="not-found-page__back link">назад</Link></din>
  );
}
export default NotFoundPage;
