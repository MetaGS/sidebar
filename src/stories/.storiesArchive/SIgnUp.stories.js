import React from 'react';
import {SignUp} from '../components/signup/signup';

export default {
    title: 'SignUp Page',
    component: SignUp
}

export const MainSignUp = () => <SignUp onClick={()=>{alert('close')}}/>;