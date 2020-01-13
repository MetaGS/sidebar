import React from 'react';
// import {action} from '@storybook/addon-actions';
import Sidebar from '../components/sidebar/Sidebar';

export default {
    title: "Sidebar",
    component: Sidebar
}

const listData = [
    {
        text: 'My profile',
    },
    {
        text: 'News'
    },
    {
        text: 'Notifications'
    },
    {
        text: 'Tasks'
    },
    {
        text: 'Homework'
    },
    {
        text: 'Enlargement'
    },
    {
        text: 'Settings'
    }

]

export const FirstEnteredData = () => <Sidebar 
        listData={{

        }}
    />
