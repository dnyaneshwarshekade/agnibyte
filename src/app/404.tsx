// src/pages/404.tsx
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[530px] text-center">
              <div className="mx-auto text-center mb-9">
                <svg
                  className="w-full mx-auto text-center"
                  height="210"
                  viewBox="0 0 474 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M25 163.051H101.211V191H133.308V163.051H153V136.111H133.308V32H91.2871L25 136.577V163.051ZM101.831 136.111H58.8025V134.869L100.591 68.6445H101.831V136.111Z"
                    stroke="url(#paint0_linear_116:1137)"
                    strokeWidth="3"
                  />
                  <path
                    opacity="0.5"
                    d="M307 133.051H383.211V161H415.308V133.051H435V106.111H415.308V2H373.287L307 106.577V133.051ZM383.831 106.111H340.803V104.869L382.591 38.6445H383.831V106.111Z"
                    stroke="url(#paint1_linear_116:1137)"
                    strokeWidth="3"
                  />
                  <circle
                    opacity="0.8"
                    cx="227.5"
                    cy="81.5"
                    r="68.5"
                    fill="#FFA500"
                  />
                  <mask
                    id="mask0_116:1137"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="159"
                    y="13"
                    width="137"
                    height="137"
                  >
                    <circle
                      opacity="0.8"
                      cx="227.5"
                      cy="81.5"
                      r="68.5"
                      fill="#FFA500"
                    />
                  </mask>
                  <g mask="url(#mask0_116:1137)">
                    <circle
                      opacity="0.8"
                      cx="227.5"
                      cy="81.5"
                      r="68.5"
                      fill="url(#paint2_radial_116:1137)"
                    />
                    <g opacity="0.8" filter="url(#filter0_f_116:1137)">
                      <circle
                        cx="233.543"
                        cy="49.2645"
                        r="28.2059"
                        fill="white"
                      />
                    </g>
                  </g>
                  <path
                    d="M0 182H83.5V209H150.5V178H169.5V148.5C169.5 148.5 194 165 229.5 165C265 165 294 134.5 294 134.5V152H306.5H361V178H435V152H474"
                    stroke="white"
                    strokeOpacity="0.08"
                    strokeWidth="2"
                  />
                  <defs>
                    <filter
                      id="filter0_f_116:1137"
                      x="175.337"
                      y="-8.94141"
                      width="116.412"
                      height="116.412"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="15"
                        result="effect1_foregroundBlur_116:1137"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_116:1137"
                      x1="25"
                      y1="183"
                      x2="126.155"
                      y2="27.0837"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFA500" stopOpacity="0" />
                      <stop offset="1" stopColor="#FFA500" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_116:1137"
                      x1="307"
                      y1="153"
                      x2="408.155"
                      y2="-2.91631"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFA500" stopOpacity="0" />
                      <stop offset="1" stopColor="#FFA500" />
                    </linearGradient>
                    <radialGradient
                      id="paint2_radial_116:1137"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(227.5 81.5) rotate(90) scale(73.5368)"
                    >
                      <stop stopOpacity="0.47" />
                      <stop offset="1" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Sorry, the page can’t be found
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                The page you were looking for appears to have been moved,
                deleted or does not exist.
              </p>
              <Link
                href="/"
                className="px-8 py-3 text-base font-bold text-white duration-300 rounded-md bg-primary shadow-signUp hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] hidden sm:block">
        <svg
          width="406"
          height="286"
          viewBox="0 0 406 286"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <rect
              opacity="0.5"
              x="56.25"
              y="110.344"
              width="116.719"
              height="116.438"
              stroke="url(#paint0_linear_116:1140)"
            />
            <rect
              opacity="0.1"
              x="56.25"
              y="110.344"
              width="116.719"
              height="116.438"
              fill="url(#paint1_linear_116:1140)"
            />
            <path
              opacity="0.5"
              d="M172.688 110.344L229.219 51V167.601L172.688 226.781V110.344Z"
              stroke="url(#paint2_linear_116:1140)"
            />
            <path
              opacity="0.1"
              d="M172.688 110.344L229.219 51V167.601L172.688 226.781V110.344Z"
              fill="url(#paint3_linear_116:1140)"
            />
            <path
              opacity="0.5"
              d="M0 169.619L56.25 110.344V226.85L0 286.125V169.619Z"
              stroke="url(#paint4_linear_116:1140)"
            />
            <path
              opacity="0.1"
              d="M0 169.619L56.25 110.344V226.85L0 286.125V169.619Z"
              fill="url(#paint5_linear_116:1140)"
            />
            <rect
              opacity="0.5"
              x="228.938"
              y="51.2812"
              width="119.25"
              height="119.25"
              stroke="url(#paint6_linear_116:1140)"
            />
            <rect
              opacity="0.1"
              x="228.938"
              y="51.2812"
              width="119.25"
              height="119.25"
              fill="url(#paint7_linear_116:1140)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_116:1140"
              x1="72.6667"
              y1="126.5"
              x2="112.92"
              y2="110.344"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F8F8F8" />
              <stop offset="1" stopColor="#F1F1F1" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_116:1140"
              x1="67.2366"
              y1="162.475"
              x2="122.372"
              y2="155.097"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E1E1E1" />
              <stop offset="1" stopColor="#F8F8F8" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_116:1140"
              x1="216.62"
              y1="226.782"
              x2="209.626"
              y2="109.663"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F8F8F8" />
              <stop offset="1" stopColor="#F1F1F1" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_116:1140"
              x1="170.937"
              y1="143.1"
              x2="234.637"
              y2="122.784"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F1F1F1" />
              <stop offset="1" stopColor="#E1E1E1" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_116:1140"
              x1="16.2917"
              y1="193.972"
              x2="41.0556"
              y2="148.026"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F8F8F8" />
              <stop offset="1" stopColor="#F1F1F1" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_116:1140"
              x1="7.91667"
              y1="228.745"
              x2="31.7528"
              y2="223.274"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E1E1E1" />
              <stop offset="1" stopColor="#F8F8F8" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_116:1140"
              x1="297.045"
              y1="114.787"
              x2="280.5"
              y2="174.325"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F8F8F8" />
              <stop offset="1" stopColor="#F1F1F1" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_116:1140"
              x1="301.893"
              y1="105.515"
              x2="282.675"
              y2="169.015"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F1F1F1" />
              <stop offset="1" stopColor="#E1E1E1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ErrorPage;
