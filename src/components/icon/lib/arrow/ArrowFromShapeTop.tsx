import React, { SVGProps } from "react";

export default (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2C12.1356 2 12.2649 2.02699 12.3828 2.07588L12.7005 2.2864L12.7071 2.29289L17.7071 7.29289C18.0976 7.68342 18.0976 8.31658 17.7071 8.70711C17.3166 9.09763 16.6834 9.09763 16.2929 8.70711L13 5.41421L13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16L11 5.41421L7.70711 8.70711C7.31658 9.09763 6.68342 9.09763 6.29289 8.70711C5.90237 8.31658 5.90237 7.68342 6.29289 7.29289L11.2929 2.29289C11.3888 2.19702 11.4993 2.12468 11.6172 2.07588C11.7351 2.02699 11.8644 2 12 2Z" fill="currentColor" />
      <path d="M4 17C4 16.4477 3.55228 16 3 16C2.44772 16 2 16.4477 2 17V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V17C22 16.4477 21.5523 16 21 16C20.4477 16 20 16.4477 20 17V20H4V17Z" fill="currentColor" />
    </svg>
  );
}