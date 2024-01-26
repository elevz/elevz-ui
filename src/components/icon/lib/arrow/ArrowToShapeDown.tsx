import React, { SVGProps } from "react";

export default (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2C12.5523 2 13 2.44772 13 3L13 13.5858L16.2929 10.2929C16.6834 9.90237 17.3166 9.90237 17.7071 10.2929C18.0976 10.6834 18.0976 11.3166 17.7071 11.7071L12.7087 16.7055L12.6936 16.7204C12.5145 16.8929 12.2711 16.9992 12.003 17L12 17L11.997 17C11.8631 16.9996 11.7353 16.9729 11.6187 16.9247C11.5002 16.8759 11.3892 16.8034 11.2929 16.7071L6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929C6.68342 9.90237 7.31658 9.90237 7.70711 10.2929L11 13.5858L11 3C11 2.44772 11.4477 2 12 2Z" fill="currentColor" />
      <path d="M4 17C4 16.4477 3.55228 16 3 16C2.44772 16 2 16.4477 2 17V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V17C22 16.4477 21.5523 16 21 16C20.4477 16 20 16.4477 20 17V20H4V17Z" fill="currentColor" />
    </svg>
  );
}