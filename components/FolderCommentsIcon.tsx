import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FolderCommentsIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 192 192" 
      width={size} 
      height={size} 
      className={className} 
      {...props}
    >
      <defs>
        <linearGradient id="fc_gradient_1" x1="-1.49" y1="183.37" x2="-1.49" y2="203.37" gradientTransform="translate(93 869) scale(4 -4)" gradientUnits="userSpaceOnUse">
          <stop offset=".47" stopColor="#cf6c00"/>
          <stop offset=".53" stopColor="#d67f10"/>
          <stop offset=".67" stopColor="#e3a12e"/>
          <stop offset=".79" stopColor="#edbb43"/>
          <stop offset=".91" stopColor="#f3ca50"/>
          <stop offset="1" stopColor="#f5cf55"/>
        </linearGradient>
        <linearGradient id="fc_gradient_2" x1="-1.49" y1="172.44" x2="-1.49" y2="198.45" gradientTransform="translate(93 869) scale(4 -4)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ecbe29"/>
          <stop offset=".14" stopColor="#f1c940"/>
          <stop offset=".36" stopColor="#f7d85d"/>
          <stop offset=".58" stopColor="#fbe271"/>
          <stop offset=".79" stopColor="#fee87e"/>
          <stop offset="1" stopColor="#ffea82"/>
        </linearGradient>
      </defs>
      <g>
        <path fill="url(#fc_gradient_1)" d="M11.06,131.25v-64.37c0-2.37.69-4.68,2-6.66l3.6-5.41c1.49-2.23,4-3.57,6.68-3.56h31.48c2.69,0,5.19,1.36,6.67,3.6l3.2,4.83c1.48,2.24,3.98,3.6,6.67,3.6h83.7c4.42,0,8,3.58,8,8v59.97H11.06Z"/>
        <path fill="url(#fc_gradient_2)" d="M155.06,179.25H19.06c-4.42,0-8-3.58-8-8v-76c0-4.42,3.58-8,8-8h35.76c2.69,0,5.19-1.36,6.67-3.6l3.2-4.83c1.48-2.24,3.98-3.6,6.67-3.6h83.7c4.42,0,8,3.58,8,8v88.03c0,4.42-3.58,8-8,8Z"/>
      </g>
      <g>
        <path fill="#2196f3" d="M167.6,88.35h-57.81l-13.34,13.34V26.09c0-7.34,6-13.34,13.34-13.34h57.81c7.34,0,13.34,6,13.34,13.34v48.91c0,7.34-6,13.34-13.34,13.34Z"/>
        <path fill="#fff" d="M134.25,43.88h8.89v24.46h-8.89v-24.46ZM138.7,28.31c-2.46,0-4.45,1.99-4.45,4.45s1.99,4.45,4.45,4.45,4.45-1.99,4.45-4.45-1.99-4.45-4.45-4.45Z"/>
      </g>
    </svg>
  );
};

export default FolderCommentsIcon;