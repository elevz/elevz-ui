import React, { SVGProps } from "react";

export default (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15 7L10 12L15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
