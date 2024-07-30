import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Image(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.75 10h.012m-3.137 16.25H7.5a3.75 3.75 0 01-3.75-3.75v-15A3.75 3.75 0 017.5 3.75h15a3.75 3.75 0 013.75 3.75v8.125"
        stroke="#B6B6B6"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.75 20L10 13.75c1.16-1.116 2.59-1.116 3.75 0l5 5"
        stroke="#B6B6B6"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 17.5l1.25-1.25c.837-.805 1.813-1.03 2.727-.675M20 23.75h7.5M23.75 20v7.5"
        stroke="#B6B6B6"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Image;
