import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function Check(props) {
    return (
        <Svg
          width={15}
          height={15}
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <Rect width={15} height={15} rx={2} fill="#03A4FF" />
          <Path
            transform="scale(.958 1.04031) rotate(-45 14.9 -.907)"
            fill="#F3F3F3"
            d="M0 0H10.4463V1.66646H0z"
          />
          <Path
            transform="matrix(-.6774 -.73561 .6774 -.73561 5.896 12)"
            fill="#F3F3F3"
            d="M0 0H5.75156V1.68688H0z"
          />
        </Svg>
      )
}

export default Check;