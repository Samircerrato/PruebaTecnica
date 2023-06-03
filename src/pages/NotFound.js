import React from 'react';
import {Link,} from 'react-router-dom';

export default function NotFound () {
  return (
    <div>
      <div class="circles">
        <p>
          404<br></br>
        </p>
        <span class="circle big"></span>
        <span class="circle med"></span>
        <span class="circle small"></span>
      </div>
      <div class="bottomCircle container text-center max-width">
        <div class="row">
          <div class="col">
            <h1 class="display-1 ">Oops!</h1>
            <h3 class="h1">Parece que estas perdido</h3>
            <p class="h1">👇</p>
            <p class="h6">Regresa a la diversion </p>
            <div class="d-grid gap-2 d-md-block">
              <Link style={{ marginBottom: "40px" }} type="button" className="btn btn-outline-primary" to="/ofert">
                Mas Ofertas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


