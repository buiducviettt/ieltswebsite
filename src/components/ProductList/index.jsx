import ProductItem from './Product';
import Image from '../../assets/image/Images';
function ProductList() {
  return (
    <div>
      <div className="row">
        <div className="col-6 col-md-4">
          <ProductItem
            title="Listening"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            image={Image.kh1}
          />
        </div>
        <div className="col-6 col-md-4">
          <ProductItem
            title="Listening"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            image={Image.kh1}
          />
        </div>
        <div className="col-6 col-md-4">
          <ProductItem
            title="Listening"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            image={Image.kh1}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6 col-md-4">
          <ProductItem
            title="Listening"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            image={Image.kh1}
          />
        </div>
        <div className="col-6 col-md-4">
          <ProductItem
            title="Listening"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            image={Image.kh1}
          />
        </div>
        <div className="col-6 col-md-4">
          <ProductItem
            title="Listening"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            image={Image.kh1}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
