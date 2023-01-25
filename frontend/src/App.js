import AllRoutes from "./AllRoutes/AllRoutes";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <AllRoutes />
      <FooterComponent />
    </>
  );
};

export default App;
