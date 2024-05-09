import React from 'react';
import './ImgGrid.css';

function ImgGrid() {
  return (
    <div className="img-grid-container">
      <div className="img-grid">
        <div className="left-image">
          <img src="https://russelservico.com.br/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0799%2F5156%2F1014%2Fproducts%2Fgrid-main_D.png%3Fv%3D1705064743&w=1080&q=75" alt="" />
        </div>
        <div className="right-column">
          <div className="upper-image"><img src="https://russelservico.com.br/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0799%2F5156%2F1014%2Fproducts%2Fgrid-side2_D.png%3Fv%3D1705064749&w=1080&q=75" alt="" /></div>
          <div className="lower-image"><img src="https://russelservico.com.br/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0799%2F5156%2F1014%2Fproducts%2Fgrid-side1_D.png%3Fv%3D1705064746&w=1080&q=75" alt="" /></div>
        </div>
      </div>
    </div>
  );
}

export default ImgGrid;
