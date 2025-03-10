import React from 'react';

import { Minus } from '../Icon.assets/Minus';
import { IconRoot, IconProps } from '../IconRoot';

export const IconMinus: React.FC<IconProps> = ({ size = 's', color, className, ...rest }) => {
    return <IconRoot className={className} size={size} color={color} icon={Minus} {...rest} />;
};
