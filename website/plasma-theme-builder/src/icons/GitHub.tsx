import React from 'react';
import styled from 'styled-components';

const StyledRoot = styled.svg`
    display: inline-flex;
    width: 1.375rem;
    height: 1.375rem;
    flex: 0 0 1.375rem;
`;

export const IconGitHub: React.FC<{ color?: string }> = ({ color, ...props }) => {
    return (
        <StyledRoot
            width="100%"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            {...props}
        >
            <path
                d="M20.5244 5.4785C19.5408 3.79313 18.2065 2.45883 16.5213 1.47528C14.8358 0.491675 12.9958 0 10.9999 0C9.00426 0 7.16362 0.491825 5.4785 1.47528C3.79313 2.45878 2.45893 3.79313 1.47528 5.4785C0.491775 7.16382 0 9.00421 0 10.9996C0 13.3965 0.699311 15.5519 2.09828 17.4663C3.49711 19.3808 5.30418 20.7056 7.51935 21.4408C7.7772 21.4886 7.96808 21.455 8.09219 21.3406C8.21635 21.2261 8.27836 21.0828 8.27836 20.9111C8.27836 20.8825 8.2759 20.6248 8.27113 20.1377C8.26622 19.6506 8.26391 19.2257 8.26391 18.8632L7.93447 18.9202C7.72443 18.9587 7.45945 18.975 7.13954 18.9703C6.81979 18.9659 6.48784 18.9324 6.14415 18.8701C5.80032 18.8083 5.48051 18.6651 5.18448 18.4407C4.8886 18.2163 4.67856 17.9226 4.5544 17.56L4.41118 17.2304C4.31571 17.011 4.16541 16.7672 3.96009 16.5C3.75476 16.2326 3.54712 16.0513 3.33708 15.9558L3.2368 15.884C3.16998 15.8363 3.10797 15.7788 3.05063 15.712C2.99334 15.6453 2.95045 15.5784 2.92181 15.5115C2.89311 15.4445 2.91689 15.3896 2.99339 15.3465C3.06989 15.3034 3.20815 15.2825 3.40876 15.2825L3.69511 15.3253C3.88609 15.3636 4.12232 15.4779 4.4041 15.669C4.68573 15.8599 4.91725 16.1081 5.0987 16.4135C5.31843 16.8051 5.58315 17.1035 5.89363 17.3089C6.20385 17.5142 6.51663 17.6167 6.83168 17.6167C7.14672 17.6167 7.41882 17.5928 7.64807 17.5453C7.87708 17.4975 8.09194 17.4257 8.29255 17.3303C8.37849 16.6903 8.61246 16.1986 8.99427 15.8549C8.45007 15.7978 7.96081 15.7116 7.52622 15.5971C7.09189 15.4824 6.64305 15.2963 6.18002 15.0382C5.71674 14.7805 5.33242 14.4605 5.02696 14.0788C4.72145 13.6968 4.47072 13.1954 4.27513 12.5749C4.07943 11.9541 3.98156 11.238 3.98156 10.4265C3.98156 9.27089 4.3588 8.28754 5.11315 7.47585C4.75978 6.60708 4.79314 5.63317 5.21333 4.5542C5.49024 4.46817 5.9009 4.53273 6.4451 4.74749C6.9894 4.96235 7.38791 5.14641 7.64105 5.29901C7.89419 5.45157 8.09701 5.58084 8.24981 5.68569C9.138 5.43752 10.0546 5.31341 10.9998 5.31341C11.945 5.31341 12.8618 5.43752 13.75 5.68569L14.2943 5.3421C14.6665 5.11285 15.106 4.90275 15.6117 4.71177C16.1178 4.52089 16.5048 4.46832 16.7723 4.55435C17.2018 5.63337 17.2401 6.60723 16.8866 7.47601C17.6409 8.28769 18.0183 9.27129 18.0183 10.4266C18.0183 11.2382 17.9201 11.9565 17.7247 12.582C17.529 13.2076 17.2761 13.7086 16.9659 14.0859C16.6553 14.4632 16.2686 14.7807 15.8055 15.0384C15.3424 15.2962 14.8934 15.4824 14.4591 15.597C14.0245 15.7117 13.5353 15.7979 12.9911 15.8552C13.4874 16.2847 13.7356 16.9627 13.7356 17.8889V20.9107C13.7356 21.0824 13.7953 21.2257 13.9148 21.3402C14.0342 21.4545 14.2227 21.4882 14.4805 21.4403C16.696 20.7052 18.503 19.3804 19.9018 17.4659C21.3004 15.5515 22 13.3961 22 10.9992C21.9995 9.00406 21.5075 7.16382 20.5244 5.4785Z"
                fill="currentColor"
            />
        </StyledRoot>
    );
};
