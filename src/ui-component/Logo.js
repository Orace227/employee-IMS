import React from 'react';
import { useTheme } from '@mui/material/styles';

const Logo = () => {
  const theme = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 375 374.999991" height="105" version="1.0">
      <path
        strokeLinecap="round"
        transform="matrix(0.75, 0.00294392, -0.00294392, 0.75, 67.128281, 140.426871)"
        fill="none"
        strokeLinejoin="round"
        d="M 7.499083 7.50042 L 43.452486 7.49992"
        stroke={theme.palette.grey[900]} // Use the primary color from the theme
        strokeWidth="15"
        strokeOpacity="1"
        strokeMiterlimit="4"
      />
      <g fill={theme.palette.primary.main} fillOpacity="1">
        <g transform="translate(218.693701, 257.1286)">
          <g>
            <path
              d="M 91.441406 -36.527344 C 91.441406 -80.027344 22.957031 -71.78125 22.957031 -99.050781 C 22.957031 -109.449219 31.960938 -115.917969 47.050781 -115.917969 C 67.472656 -115.917969 81.546875 -104.125 81.546875 -86.496094 L 83.195312 -86.496094 C 83.195312 -105.265625 67.851562 -117.945312 45.402344 -117.945312 C 21.179688 -117.945312 4.691406 -102.980469 4.691406 -81.421875 C 4.691406 -37.792969 73.179688 -48.445312 73.179688 -19.65625 C 73.179688 -7.988281 62.90625 -1.902344 47.941406 -1.902344 C 23.082031 -1.902344 6.59375 -15.09375 6.59375 -34.75 L 4.945312 -34.75 C 4.945312 -13.949219 22.574219 0 49.207031 0 C 73.9375 0 91.441406 -14.332031 91.441406 -36.527344 Z M 91.441406 -36.527344"
            />
          </g>
        </g>
      </g>
      <g fill={theme.palette.secondary.main} fillOpacity="1">
        <g transform="translate(94.161111, 257.1286)">
          <g>
            <path
              d="M 107.929688 -33.988281 C 107.929688 -16.105469 122.386719 -1.648438 140.269531 -1.648438 L 149.652344 -1.648438 L 149.652344 -84.210938 C 149.652344 -101.96875 135.320312 -116.296875 117.566406 -116.296875 L 106.914062 -116.296875 L 82.5625 -55.929688 L 64.171875 -97.273438 C 58.972656 -108.816406 47.433594 -116.296875 34.875 -116.296875 L 10.273438 -116.296875 L 10.273438 -1.648438 L 11.921875 -1.648438 L 11.921875 -114.648438 L 62.144531 0 L 107.929688 -113.890625 Z M 107.929688 -33.988281"
            />
          </g>
        </g>
      </g>
      <path
        strokeLinecap="round"
        transform="matrix(0.75, 0.000000000000000837, -0.000000000000000837, 0.75, 67.106206, 244.293354)"
        fill="none"
        strokeLinejoin="round"
        d="M 7.499018 7.499487 L 94.405274 7.499487"
        stroke={theme.palette.grey[900]} // Use the primary color from the theme
        strokeWidth="15"
        strokeOpacity="1"
        strokeMiterlimit="4"
      />
      <path
        strokeLinecap="butt"
        transform="matrix(0.75, 0.000000000000003356, -0.000000000000003356, 0.75, 99.956211, 140.576768)"
        fill="none"
        strokeLinejoin="round"
        d="M 0.00109402 7.50181 L 6.350053 7.50181"
        stroke={theme.palette.grey[900]} // Use the primary color from the theme
        strokeWidth="15"
        strokeOpacity="1"
        strokeMiterlimit="4"
      />
    </svg>
  );
};

export default Logo;
