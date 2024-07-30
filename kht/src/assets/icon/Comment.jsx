import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Comment(props) {
  return (
    <Svg
      width={15}
      height={14}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.5 12.25c-1.113 0-2.2-.308-3.125-.885A5.346 5.346 0 012.303 9.01a4.926 4.926 0 01-.32-3.033 5.152 5.152 0 011.54-2.688 5.76 5.76 0 012.88-1.437 6 6 0 013.25.299 5.56 5.56 0 012.524 1.933c.618.864.948 1.879.948 2.917 0 .868-.225 1.686-.625 2.407l.625 2.843-3.046-.583a5.92 5.92 0 01-2.579.583zM5.357 7h.005m2.133 0H7.5m2.138 0h.005"
        stroke="#111"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Comment;
