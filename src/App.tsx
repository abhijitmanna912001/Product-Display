import ProductInfo from "./components/ProductInfo";
import RenderList from "./components/RenderList";
import { electronics } from "./data/data";

const App = () => {
  return (
    <div>
      <RenderList
        data={electronics}
        resourceName="product"
        dataToRender={ProductInfo}
      />
    </div>
  );
};

export default App;
