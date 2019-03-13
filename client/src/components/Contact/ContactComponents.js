import React from "react";

export function Map() {
  return (
    <div className="d-none d-lg-block col-md-6 maps mt-5">
      <iframe
        title="E-Corp"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=24%20rue%20pasteur%20Le%20Kremlin%20Bic%C3%AAtre+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      />
    </div>
  );
}

export function Form(props) {
  return (
    <form>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <input type="text" className="form-control mt-3" placeholder="Nom" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-group">
            <input type="email" className="form-control mt-3" placeholder="Example@email.com" />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-group">
            <input type="text" className="form-control mb-4" placeholder="Objet" />
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <textarea className="form-control" placeholder="Votre message" rows="5" />
          </div>
        </div>
        <div className="col-12 text-center">
          <button className="btn btn-info mt-3 mb-5" type="submit">
            Envoyer
          </button>
        </div>
      </div>
    </form>
  );
}
