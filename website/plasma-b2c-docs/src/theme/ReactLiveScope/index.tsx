import React from 'react';
import * as Icons from '@salutejs/plasma-icons';
import * as Tokens from '@salutejs/plasma-tokens-b2c';
import * as B2C from '@salutejs/plasma-b2c';
import { Filler } from '@salutejs/plasma-docs-ui';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

// Add react-live imports you need here
const ReactLiveScope = {
    React,
    Filler,
    styled,
    useForm,
    ...Icons,
    ...Tokens,
    ...B2C,
    ...React,
};

export default ReactLiveScope;
