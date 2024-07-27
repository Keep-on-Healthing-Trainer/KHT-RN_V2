import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Delete(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.29 3.052a.583.583 0 01.075.821L7.759 7l2.606 3.127a.584.584 0 11-.896.746L7 7.911l-2.468 2.962a.585.585 0 01-.971-.097.584.584 0 01.074-.65L6.241 7 3.635 3.873a.583.583 0 11.897-.746L7 6.089l2.469-2.962a.583.583 0 01.821-.075z"
        fill="#878791"
      />
    </Svg>
  )
}

export default Delete;