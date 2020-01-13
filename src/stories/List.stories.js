import React from 'react';
import {action} from '@storybook/addon-actions';
import List from '../components/sidebarList/List';

export default {
    title: 'List',
    component: List
}

export const Hello = () => <List  
    onClick={ action('clicked') } 
    item={{text:'Hello World'}} 
    />;
export const SignUp = () => <List 
    item={{text:'Please Sign Up'}}
    />