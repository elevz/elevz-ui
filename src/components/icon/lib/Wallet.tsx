import React, { SVGProps } from "react";

export default (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M19 8V8C20.1046 8 21 8.89543 21 10V18C21 19.1046 20.1046 20 19 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H17C18.1046 4 19 4.89543 19 6V8ZM19 8H7M17 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
