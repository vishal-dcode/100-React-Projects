export default function Loading() {
  return (
    <div className="preloader">
      <svg
        className="cart"
        role="img"
        aria-label="Shopping cart line animation"
        viewBox="0 0 128 128"
        width="128px"
        height="128px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="8"
        >
          <g className="cart__track" stroke="hsla(0,10%,10%,0.1)">
            <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
            <circle cx="43" cy="111" r="13" />
            <circle cx="102" cy="111" r="13" />
          </g>
          <g className="cart__lines" stroke="currentColor">
            <polyline
              className="cart__top"
              points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80"
              stroke-dasharray="338 338"
              stroke-dashoffset="-338"
            />
            <g className="cart__wheel1" transform="rotate(-90,43,111)">
              <circle
                className="cart__wheel-stroke"
                cx="43"
                cy="111"
                r="13"
                stroke-dasharray="81.68 81.68"
                stroke-dashoffset="81.68"
              />
            </g>
            <g className="cart__wheel2" transform="rotate(90,102,111)">
              <circle
                className="cart__wheel-stroke"
                cx="102"
                cy="111"
                r="13"
                stroke-dasharray="81.68 81.68"
                stroke-dashoffset="81.68"
              />
            </g>
          </g>
        </g>
      </svg>
      <div className="preloader__text">
        <p className="preloader__msg">Bringing you the goods…</p>
        <p className="preloader__msg preloader__msg--last">
          This is taking long. Something’s wrong.
        </p>
      </div>
    </div>
  );
}
