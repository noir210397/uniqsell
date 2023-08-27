import ErrorContainer from "../components/ErrorContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <ErrorContainer value="Page Not Found" />
      <Footer />
    </div>
  );
};

export default ErrorPage;
