import Image from "next/image"
import "@/app/page.style.css"
import imageProduct from "@/product-preview-card-component-main/images/image-product-desktop.jpg"
import { IoCartOutline } from "react-icons/io5"

export default function Home() {
  return (
    <main>
      <div className="container-product">
        <div className="img-container">
          <Image
            src={imageProduct}
          />
        </div>
        <div className="info-container">
          <p className="category-name">Perfume</p>
          <p className="product-name">Gabrielle Essence Eau De Parfum</p>
          <p className="description-product">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className="price-box">
            <p className="price">$149,99</p>
            <p className="ex-price">$169,99</p>
          </div>
          <div className="btn-box">
            <button>
              <span>
                <IoCartOutline />
              </span>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
