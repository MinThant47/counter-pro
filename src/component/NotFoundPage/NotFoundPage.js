import { useHistory, Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const history = useHistory();
  return (
    <div className="wrapper">
      <div className="not-found">
        <h1>404</h1>
        <h2 className="text">Opps! Page not found</h2>
        <p className="text">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <div className="button-group">
          <Link className="primary-button" to="/">
            Back to Home
          </Link>
          <button
            onClick={() => {
              history.goBack();
            }}
            className="secondary-button"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
