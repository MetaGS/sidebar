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
        listData={listData}
        activity={true}
    />
export const InactiveCheck = () => <Sidebar 
        listData={listData}
        activity={false}
    />


export const LongStringsData = () => <Sidebar 
        activity={true}
        listData={
            [
                {
                    text: 'Это очень длинный текст'
                },
                {
                    text: 'This is very long string how does it handle it'
                },
                {
                    text: 'If it is goes too long I need to do something'
                }
            ]
        }
    />
