import React from 'react';
import data from './data';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">Yuknus</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {
            data.products.map((product) => (
              <div key={product._id} className="card">
                <a href={`/product/${product.id}`}>
                  {/* image size: 680px by 830px */}
                  <img className="medium" src={product.image} alt="product" />
                </a>

                <div className="card-body">
                  <a href={`/product/${product.id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  {/* half star: fa fa-star-half-o No star: fa fa-star-o*/}
                  <div className="rating">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                  </div>
                  <div className="price">${product.price}</div>
                </div>
              </div>
            ))
          }
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;