import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ homeUrl }) => (
  <div className="navbar navbar-expand-md navbar-light bg-white global-header">
    <a
      href={`${homeUrl}/welcome/`}
      title="Sentry error monitoring"
      className="navbar-brand pb-0"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298.11 80">
        <g height="75" width="75" className="loader-spin">
          <path
            d="M7.8 49.78c-1.75 2.88-3.19 5.4-4.35 7.56a3.9 3.9 0 0 0 3.34 6h18.86a25.75 25.75 0 0 0-12.87-22.19c1.9-3.17 5.12-9 6.32-11a38.47 38.47 0 0 1 19.14 33.23h12.63a50.79 50.79 0 0 0-25.51-44C29.65 12 32.38 7 33.89 4.64a4 4 0 0 1 6.66 0C42 7 69.53 54.8 71 57.34a4 4 0 0 1-3.75 6h-6.79"
            fill="none"
            stroke="currentColor"
            className="loader-stroke loading"
            strokeWidth="5"
          />
        </g>
        <path
          d="M184.35 42.25l-22.17-28.71h-5.55v38.4h5.55V22.45l22.75 29.49h4.93v-38.4h-5.51zm-55.81-7.13h19.8v-4.93h-19.8V18.72h22.37v-5.18H123v38.4h28.29V47h-22.75zm-23.16-4.93c-7.71-1.78-9.9-3.35-9.9-6.92s2.77-5.34 7.12-5.34a18.48 18.48 0 0 1 10.69 3.77l3-4.14A21.5 21.5 0 0 0 102.6 13c-7.5 0-12.84 4.56-12.84 10.9s4.56 9.28 12.68 11.27c7.33 1.57 9.49 3.14 9.49 6.71s-3 5.76-7.71 5.76a18.93 18.93 0 0 1-12.43-4.93l-3.36 4.14a23.87 23.87 0 0 0 15.62 5.76c8.29 0 13.47-4.35 13.47-11.27.12-5.84-3.44-8.99-12.14-11.15zm186.19-16.57l-11.48 17.94-11.47-18h-6.72l15.25 23.14v15.24h5.76V36.49l15.2-23h-6.54zm-97 5.1H207v33.14h5.76V18.72h12.43v-5.18h-30.65zM252 37a11.28 11.28 0 0 0 8.83-11.56c0-7.33-5.35-11.89-14-11.89h-16.99v38.4h5.76V38.11h9.69L255 51.94h6.71l-10.49-14.66zm-16.57-3.77V18.51h10.69c5.55 0 8.91 2.57 8.91 7.33a7.63 7.63 0 0 1-7.84 7.41 8.09 8.09 0 0 1-.86-.07H235.6z"
          fill="currentColor"
        />
      </svg>
    </a>

    <button
      className="d-md-none btn btn-outline-dark"
      type="button"
      data-toggle="collapse"
      data-target="#sidebar"
      aria-controls="sidebar"
      aria-expanded="false"
      aria-label="Toggle table of contents"
    >
      Table of Contents
    </button>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
