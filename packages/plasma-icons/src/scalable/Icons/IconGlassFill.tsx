import React from 'react';

import { GlassFill as Icon16 } from '../Icon.assets.16/GlassFill';
import { GlassFill as Icon24 } from '../Icon.assets.24/GlassFill';
import { GlassFill as Icon36 } from '../Icon.assets.36/GlassFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconGlassFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
