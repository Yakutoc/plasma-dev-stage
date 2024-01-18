import React from 'react';

import { IconProps } from '../IconRoot';

export const AnimalOutline: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M8 14C8.55229 14 9 13.3284 9 12.5C9 11.6716 8.55229 11 8 11C7.44772 11 7 11.6716 7 12.5C7 13.3284 7.44772 14 8 14Z"
            fill="currentColor"
        />
        <path
            d="M16 14C16.5523 14 17 13.3284 17 12.5C17 11.6716 16.5523 11 16 11C15.4477 11 15 11.6716 15 12.5C15 13.3284 15.4477 14 16 14Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5 13.5625C10.384 13.5625 10.2727 13.6086 10.1906 13.6906C10.1086 13.7727 10.0625 13.884 10.0625 14C10.0625 14.2787 10.1095 14.5558 10.2019 14.8161C10.2943 15.0763 10.4311 15.3167 10.6072 15.5222C10.7833 15.7277 10.9962 15.895 11.2356 16.0107C11.3214 16.0522 11.4098 16.0866 11.5 16.1137V17C11.5 17.0657 11.4871 17.1307 11.4619 17.1913C11.4368 17.252 11.4 17.3071 11.3536 17.3536C11.3071 17.4 11.252 17.4368 11.1913 17.4619C11.1307 17.4871 11.0657 17.5 11 17.5C10.9343 17.5 10.8693 17.4871 10.8087 17.4619C10.748 17.4368 10.6929 17.4 10.6464 17.3536C10.6 17.3071 10.5632 17.252 10.5381 17.1913C10.5129 17.1307 10.5 17.0657 10.5 17C10.5 16.7239 10.2761 16.5 10 16.5C9.72386 16.5 9.5 16.7239 9.5 17C9.5 17.197 9.5388 17.392 9.61418 17.574C9.68956 17.756 9.80005 17.9214 9.93934 18.0607C10.0786 18.1999 10.244 18.3104 10.426 18.3858C10.608 18.4612 10.803 18.5 11 18.5C11.197 18.5 11.392 18.4612 11.574 18.3858C11.7303 18.3211 11.8742 18.2305 12 18.118C12.1258 18.2305 12.2697 18.3211 12.426 18.3858C12.608 18.4612 12.803 18.5 13 18.5C13.197 18.5 13.392 18.4612 13.574 18.3858C13.756 18.3104 13.9214 18.1999 14.0607 18.0607C14.1999 17.9214 14.3104 17.756 14.3858 17.574C14.4612 17.392 14.5 17.197 14.5 17C14.5 16.7239 14.2761 16.5 14 16.5C13.7239 16.5 13.5 16.7239 13.5 17C13.5 17.0657 13.4871 17.1307 13.4619 17.1913C13.4368 17.252 13.4 17.3071 13.3536 17.3536C13.3071 17.4 13.252 17.4368 13.1913 17.4619C13.1307 17.4871 13.0657 17.5 13 17.5C12.9343 17.5 12.8693 17.4871 12.8087 17.4619C12.748 17.4368 12.6929 17.4 12.6464 17.3536C12.6 17.3071 12.5632 17.252 12.5381 17.1913C12.5129 17.1307 12.5 17.0657 12.5 17V16.1137C12.5902 16.0866 12.6786 16.0522 12.7644 16.0107C13.0038 15.895 13.2167 15.7277 13.3928 15.5222C13.5689 15.3167 13.7057 15.0763 13.7981 14.8161C13.8905 14.5558 13.9375 14.2787 13.9375 14C13.9375 13.7584 13.7416 13.5625 13.5 13.5625H10.5ZM11.0265 14.5233C11.0164 14.4951 11.0072 14.4665 10.9989 14.4375H13.0011C12.9928 14.4665 12.9836 14.4951 12.9735 14.5233C12.9152 14.6877 12.831 14.8331 12.7285 14.9527C12.6261 15.0722 12.5082 15.1627 12.3837 15.2229C12.2594 15.2829 12.1293 15.3125 12 15.3125C11.8707 15.3125 11.7406 15.2829 11.6163 15.2229C11.4918 15.1627 11.3739 15.0722 11.2715 14.9527C11.169 14.8331 11.0848 14.6877 11.0265 14.5233Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.72219 2.36607C5.39405 2.07713 6.12622 1.9563 6.8553 2.01405C7.58437 2.07179 8.28839 2.30637 8.9064 2.69747C9.19862 2.8824 9.46745 3.09969 9.70818 3.34444C10.4325 3.12055 11.2022 3 12 3C12.7978 3 13.5675 3.12055 14.2918 3.34444C14.5725 3.05903 14.8911 2.81133 15.2398 2.60881C15.8667 2.24465 16.5724 2.03736 17.2966 2.0046C18.0209 1.97183 18.7424 2.11456 19.3997 2.42063C20.0569 2.72669 20.6305 3.18704 21.0715 3.76247C21.5126 4.3379 21.8081 5.01139 21.9329 5.7256C22.0576 6.43981 22.008 7.17359 21.7881 7.86448C21.5683 8.55537 21.1848 9.18291 20.6702 9.69369C20.4612 9.90115 20.2331 10.0869 19.9895 10.2486C21.216 11.2565 22 12.7865 22 14.5C22 17.5376 19.5376 20 16.5 20C16.4154 20 16.3312 19.9981 16.2475 19.9943C15.2397 21.2179 13.7112 22 12 22C10.2888 22 8.76032 21.2179 7.75251 19.9943C7.66877 19.9981 7.58459 20 7.5 20C4.46243 20 2 17.5376 2 14.5C2 12.7865 2.78397 11.2565 4.01047 10.2486C3.75065 10.0761 3.50854 9.87637 3.28848 9.65216C2.77617 9.13021 2.39881 8.49126 2.18905 7.79062C1.97929 7.08998 1.94346 6.34878 2.08467 5.63118C2.22587 4.91358 2.53985 4.24121 2.99943 3.67228C3.459 3.10335 4.05032 2.65501 4.72219 2.36607ZM8.10426 3.96498C8.12725 3.97952 8.15001 3.99437 8.17255 4.0095C6.39194 5.02277 5.05206 6.72129 4.51157 8.74637C4.45913 8.69994 4.40823 8.65161 4.35898 8.60144C4.01745 8.25347 3.76587 7.8275 3.62603 7.36041C3.48619 6.89332 3.46231 6.39919 3.55645 5.92079C3.65058 5.44239 3.8599 4.99414 4.16629 4.61485C4.47267 4.23557 4.86688 3.93667 5.31479 3.74405C5.7627 3.55142 6.25081 3.47087 6.73686 3.50937C7.22292 3.54786 7.69226 3.70425 8.10426 3.96498ZM19.4884 8.74637C19.5312 8.70855 19.5729 8.66945 19.6135 8.62913C19.9565 8.28861 20.2122 7.87025 20.3588 7.40965C20.5053 6.94906 20.5384 6.45987 20.4552 5.98373C20.3721 5.50759 20.1751 5.0586 19.881 4.67498C19.587 4.29136 19.2046 3.98446 18.7664 3.78042C18.3283 3.57637 17.8473 3.48122 17.3644 3.50307C16.8816 3.52491 16.4111 3.6631 15.9932 3.90587C15.9367 3.93866 15.8815 3.97323 15.8274 4.0095C17.6081 5.02277 18.9479 6.72129 19.4884 8.74637ZM5.7554 10.4875C5.89268 7.15777 8.63615 4.5 12 4.5C15.3638 4.5 18.1073 7.15777 18.2446 10.4875L18.261 10.8853L18.5996 11.0946C19.7417 11.8005 20.5 13.062 20.5 14.5C20.5 16.7091 18.7091 18.5 16.5 18.5C16.3282 18.5 16.1592 18.4892 15.9937 18.4683L15.5438 18.4116L15.2845 18.7837C14.5605 19.8227 13.3593 20.5 12 20.5C10.6407 20.5 9.43945 19.8227 8.71546 18.7837L8.45621 18.4116L8.00631 18.4683C7.8408 18.4892 7.67184 18.5 7.5 18.5C5.29086 18.5 3.5 16.7091 3.5 14.5C3.5 13.062 4.25828 11.8005 5.40037 11.0946L5.739 10.8853L5.7554 10.4875Z"
            fill="currentColor"
        />
    </svg>
);
