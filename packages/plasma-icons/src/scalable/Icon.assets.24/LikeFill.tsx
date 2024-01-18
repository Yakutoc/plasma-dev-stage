import React from 'react';

import { IconProps } from '../IconRoot';

export const LikeFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g style={{ mixBlendMode: 'lighten' }} opacity="0.9">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.927 1.50571C13.3184 1.33183 12.6809 1.66812 12.4807 2.26857L11.4576 5.33789C11.3348 5.70633 11.1673 6.05832 10.9587 6.38597L8.59881 10.0944C8.44198 10.3409 8.26352 10.5712 8.06619 10.7829C7.53081 9.90999 6.42061 9.44844 5.35353 9.84859L4.40034 10.206C3.56724 10.5185 2.99649 11.2924 2.94425 12.1807L2.58402 18.3045C2.51441 19.4879 3.37483 20.5222 4.55106 20.6693L5.5499 20.7941C6.41604 20.9024 7.22148 20.5043 7.68131 19.8396L13.5659 21.1188C15.3861 21.5146 17.252 20.6788 18.1686 19.0571L20.6878 14.6001C21.9123 12.4335 20.3471 9.75089 17.8584 9.75089H15.8017C15.309 9.75089 14.9501 9.28378 15.0771 8.80764L16.0338 5.22005C16.4619 3.61459 15.5246 1.96217 13.927 1.50571ZM5.88022 11.2531C6.38481 11.0639 6.91835 11.4527 6.89271 11.991L6.57813 18.5972C6.55735 19.0336 6.16947 19.3599 5.73596 19.3057L4.73711 19.1808C4.34503 19.1318 4.05823 18.787 4.08143 18.3926L4.44166 12.2687C4.45907 11.9727 4.64932 11.7147 4.92702 11.6105L5.88022 11.2531Z"
                fill="currentColor"
            />
        </g>
    </svg>
);
