import { Theme } from "@contexts/ThemeContext";

type Props = { theme: Theme; callback: () => void };

export default function InstagramFontLogo(props: Props) {
  const fillColor = props.theme === "light" ? "#0C1014" : "#fff";
  return (
    <svg
      width="202"
      height="58"
      viewBox="0 0 202 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.395 0.379885C6.27966 2.12481 1.74581 7.01059 0.281025 13.0829C-1.53252 20.8304 6.00065 24.1108 6.62841 23.0639C7.32593 21.8075 5.30314 21.3888 4.81488 17.3405C4.32661 12.1756 6.76792 6.31262 9.76723 3.79993C10.3252 3.31135 10.3252 4.00932 10.3252 5.19587L10.1857 31.0905C10.1857 36.6045 9.97649 38.3494 9.55798 40.0943C9.13947 41.8392 8.51171 43.0258 8.99997 43.5144C9.55798 44.0029 11.9993 42.8164 13.3943 40.8621C14.9986 38.4192 15.8356 35.5575 15.7659 32.6958C15.9054 28.9966 15.9054 23.1337 15.9054 19.8532C15.9054 16.7822 15.9751 7.84815 15.8356 2.47379C15.7659 1.00806 12.1388 -0.387881 10.395 0.379885ZM157.222 26.2745C157.152 28.5778 156.664 30.8811 155.618 32.975C154.083 36.0461 150.944 37.0233 149.549 32.5563C148.852 30.1832 148.782 26.1349 149.34 22.7847C149.898 19.3646 151.363 16.7822 153.874 16.9915C156.385 17.2707 157.501 20.4116 157.222 26.2745ZM115.859 44.1425C115.79 48.8887 115.092 53.0765 113.488 54.3329C111.186 56.0778 108.117 54.7517 108.745 51.2618C109.303 48.1908 111.953 45.0499 115.929 41.1413L115.859 44.1425ZM115.232 26.2047C115.162 28.508 114.604 30.8113 113.627 32.975C112.093 36.0461 108.884 37.0233 107.559 32.5563C106.652 29.555 106.861 25.6464 107.35 23.1337C107.908 19.923 109.372 16.9915 111.883 16.9915C114.325 17.0613 115.58 19.7136 115.232 26.2047ZM91.237 26.2047C91.1673 28.5778 90.679 30.8811 89.7025 32.975C88.0982 36.0461 85.0292 36.9535 83.6341 32.5563C82.6576 29.4154 83.0064 25.0182 83.4249 22.7149C84.0526 19.225 85.5872 16.7822 87.9587 16.9915C90.4 17.2707 91.5858 20.4116 91.237 26.2047ZM201.096 29.4154C200.538 29.4154 200.189 30.0436 199.98 31.0905C199.212 34.72 198.375 35.5575 197.329 35.5575C196.143 35.5575 195.097 33.7428 194.818 30.1832C194.609 27.3215 194.609 22.1565 194.958 16.9915C195.027 15.9446 194.679 14.8976 191.889 13.8507C190.703 13.4319 188.889 12.7339 187.982 14.8976C186.239 19.0157 184.983 23.2733 184.286 27.6705C184.286 27.8101 184.146 27.8101 184.076 27.5309C183.937 25.9953 183.588 23.1337 183.588 17.2009C183.588 16.0144 183.309 15.0372 182.054 14.2695C181.217 13.7111 178.705 12.8037 177.729 13.9205C176.962 14.8278 176.055 17.2707 175.078 20.1324L173.753 24.041V15.3164C173.753 14.4091 173.125 14.1299 172.916 14.0601C171.87 13.7111 170.824 13.5017 169.708 13.4319C168.871 13.4319 168.661 13.9205 168.661 14.6185C168.661 14.6883 168.522 22.9243 168.522 28.7174V29.4852C168.033 32.1375 166.499 35.6971 164.755 35.6971C163.081 35.6971 162.244 34.1616 162.244 27.3215C162.244 23.3431 162.384 21.5981 162.453 18.6667C162.523 16.9915 162.593 15.7352 162.593 15.456C162.593 14.5487 161.058 14.1299 160.291 13.9205C159.594 13.7809 158.966 13.7111 158.478 13.7111C157.78 13.7809 157.292 14.1997 157.292 14.8278V15.805C156.524 14.6185 155.339 13.6413 154.013 13.1527C151.433 12.385 148.782 13.0829 146.759 15.8748C145.015 18.3875 143.969 21.319 143.76 24.3202C143.481 26.9725 143.551 29.6946 144.039 31.9979C143.481 34.5804 142.295 35.6273 141.109 35.6273C139.366 35.6273 138.04 32.6959 138.18 27.7403C138.319 24.4598 138.947 22.1565 139.645 18.8063C139.924 17.3405 139.714 16.6426 139.087 15.9446C138.529 15.3164 137.273 14.9674 135.529 15.3862C134.274 15.6654 132.46 16.0144 130.856 16.2238C130.856 16.2238 130.926 15.8748 131.065 15.1768C131.484 11.5474 127.508 11.8266 126.252 13.0131C125.485 13.7111 124.997 14.5487 124.788 16.0144C124.509 18.3177 126.392 19.4344 126.392 19.4344C125.136 24.1108 123.113 28.4382 120.323 32.3469V31.0905C120.323 25.088 120.393 20.3418 120.393 18.6667C120.463 16.9915 120.533 15.7352 120.533 15.456C120.533 14.8278 120.114 14.5487 119.347 14.2695C118.649 13.9903 117.812 13.7809 116.975 13.7111C115.929 13.6413 115.232 14.1997 115.232 14.8976V15.805C114.464 14.5487 113.279 13.6413 111.953 13.1527C109.372 12.385 106.722 13.0829 104.699 15.8748C103.025 18.3875 101.979 21.319 101.7 24.3202C101.421 27.1121 101.491 29.4852 101.839 31.5791C101.421 33.6032 100.235 35.6971 98.9097 35.6971C97.2357 35.6971 96.2591 34.2314 96.2591 27.3215C96.2591 23.3431 96.3987 21.5981 96.4684 18.6667C96.5382 16.9915 96.6079 15.7352 96.6079 15.456C96.6079 14.5487 95.0734 14.1299 94.3061 13.9205C93.5388 13.7111 92.9111 13.7111 92.4228 13.7111C91.7951 13.7809 91.3068 14.3393 91.3068 14.758V15.7352C90.5395 14.4789 89.3537 13.5715 88.0285 13.0829C85.4477 12.3152 82.7971 13.0131 80.7743 15.805C79.449 17.6197 78.333 19.7136 77.775 24.1806C77.6355 25.3672 77.5657 26.6235 77.5657 27.8101C77.0077 31.0207 74.7059 34.7898 72.7529 34.7898C71.6369 34.7898 70.5208 32.6261 70.5208 28.0195C70.5208 21.8773 70.9393 13.0829 70.9393 12.2454L73.8689 12.1756C75.0547 12.1756 76.1707 12.1756 77.775 12.1058C78.612 12.036 79.3793 9.17429 78.5423 8.82531C78.1935 8.68572 75.4732 8.54612 74.4269 8.47633C73.5201 8.47633 71.0788 8.26694 71.0788 8.26694C71.0788 8.26694 71.2881 2.404 71.3578 1.84562C71.4276 1.28724 70.7301 1.07785 70.3116 0.868463C69.4048 0.519479 68.498 0.240291 67.5913 0.100697C66.266 -0.17849 65.6382 0.100697 65.4987 1.21745C65.2895 2.96237 65.2197 8.05754 65.2197 8.05754C64.2432 8.05754 60.8254 7.84815 59.8488 7.84815C58.9421 7.84815 57.8958 11.8266 59.2211 11.8964L64.9407 12.036L64.8709 23.9014V24.739C63.9642 29.6248 60.6859 32.2771 60.6859 32.2771C61.3834 29.0664 59.9186 26.6235 57.3378 24.5994C56.3613 23.8316 54.478 22.4357 52.3157 20.8304C52.3157 20.8304 53.5712 19.6438 54.6175 17.2009C55.3847 15.456 55.4545 13.5017 53.5014 13.0829C50.3626 12.3152 47.7818 14.6185 47.0146 17.1311C46.3868 18.7365 46.7355 20.621 47.9213 21.8773L48.2003 22.2263C47.5028 23.5525 46.5263 25.437 45.6893 26.8329C43.3875 30.7415 41.7134 33.8824 40.3882 33.8824C39.3419 33.8824 39.3419 30.7415 39.3419 27.7403C39.3419 25.1578 39.5511 21.319 39.6906 17.3405C39.7604 16.0144 39.0629 15.2466 37.9469 14.6185C37.0401 13.9903 36.0636 13.5715 35.0173 13.3621C33.7618 13.3621 30.2044 13.5715 26.7866 23.3431C26.3681 24.5994 25.5311 26.8329 25.5311 26.8329L25.6008 15.107C25.6008 14.8278 25.4613 14.5487 25.1126 14.4091C24.0663 13.8507 22.8805 13.5017 21.6947 13.4319C21.067 13.4319 20.7182 13.7111 20.7182 14.3393L20.5787 32.7656C20.5787 34.1616 20.6485 35.7669 20.788 36.5347C20.9275 37.2326 21.1367 37.791 21.4157 38.14C21.6947 38.489 21.9738 38.7682 22.5318 38.838C23.02 38.9776 25.7403 39.2568 25.8798 38.2796C26.0891 37.0233 26.0891 35.6971 27.4841 30.7415C29.6464 23.0639 32.5062 19.225 33.9013 17.8989C34.1105 17.6197 34.3895 17.6197 34.3895 18.0385L33.971 27.5309C33.6223 37.1629 35.3661 38.9078 37.8771 38.9078C39.7604 38.9078 42.4807 37.0233 45.4103 32.2073L50.2231 24.1806L53.0829 26.7631C55.3847 28.9268 56.152 30.9509 55.594 32.9052C55.2452 34.371 53.7805 35.9763 51.1996 34.4408C50.4324 34.022 50.1534 33.673 49.3861 33.1844C48.9676 32.9052 48.3398 32.8354 47.9911 33.1146C47.0146 33.8126 46.4565 34.7898 46.1775 35.9065C45.8985 37.0233 47.0146 37.5816 48.1306 38.0702C49.1071 38.489 51.2694 38.9078 52.5947 38.9776C57.8958 39.187 62.0809 36.4649 65.0105 29.4154C65.5685 35.4877 67.8005 38.9078 71.6368 38.9078C74.2177 38.9078 76.8682 35.5575 77.9842 32.2771C78.333 33.6032 78.8213 34.7898 79.449 35.7669C82.4483 40.5131 88.2377 39.4661 91.1673 35.4179C92.0741 34.1616 92.2136 33.7428 92.2136 33.7428C92.4228 36.5347 94.6549 38.7682 97.4449 38.9078C99.398 38.9078 101.421 38.0004 102.886 34.7898C103.025 35.1387 103.234 35.4877 103.444 35.7669C106.443 40.5131 112.232 39.4661 115.162 35.4179L115.511 34.9293L115.58 37.442L112.93 39.8849C108.396 44.0029 104.978 47.1438 104.769 50.7732C104.42 55.4496 108.187 57.1248 111.046 57.404C113.976 57.5435 116.696 56.0778 118.301 53.6349C119.696 51.6108 120.602 47.1438 120.533 42.7466L120.393 36.3951C124.648 31.4395 127.996 25.7162 130.089 19.5042C130.089 19.5042 131.763 19.5042 133.506 19.4344C134.064 19.3646 134.274 19.5042 134.134 19.923C133.995 20.4116 131.902 28.5778 133.855 34.022C135.181 37.7212 138.18 38.9078 139.924 38.9078C141.946 38.9078 143.969 37.3722 145.015 34.9991L145.434 35.7669C148.433 40.5131 154.223 39.4661 157.152 35.4179C157.78 34.5106 158.199 33.7428 158.199 33.7428C158.826 37.6514 161.895 38.9078 163.639 38.9078C165.453 38.9078 167.196 38.14 168.591 34.8596C168.661 36.3253 168.731 37.5118 168.871 37.9306C168.94 38.14 169.498 38.489 169.847 38.5588C171.521 39.187 173.195 38.9078 173.823 38.7682C174.241 38.6984 174.59 38.3494 174.66 37.442C174.799 35.0689 174.73 31.0905 175.427 28.0893C176.613 23.0639 177.729 21.1794 178.287 20.2022C178.566 19.6438 178.915 19.574 178.915 20.1324C178.915 21.2492 178.984 24.6692 179.473 29.1362C179.821 32.4865 180.31 34.4408 180.659 35.0689C181.705 36.8837 182.96 36.9535 183.937 36.9535C184.565 36.9535 185.96 36.7441 185.82 35.6273C185.75 35.0689 185.89 31.6489 187.076 26.7631C187.843 23.5525 189.098 20.6908 189.587 19.574C189.796 19.225 189.866 19.5042 189.866 19.574C189.726 21.7377 189.517 28.9966 190.424 32.9052C191.61 38.2098 195.167 38.838 196.422 38.838C199.073 38.838 201.165 36.8139 201.933 31.5791C202.142 30.3926 201.863 29.4154 201.096 29.4154Z"
        fill={fillColor}
      />
    </svg>
  );
}