import React from 'react';

import { CloseCircleOutline } from '../Icon.assets/CloseCircleOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconCloseCircleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={CloseCircleOutline} />;
};
