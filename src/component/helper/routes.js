// import React from 'react';
import {About,Contact,Lowi,KYC,Support} from "../pages"
import Main from '../Main'

const routes = [
    { path: '/about', component:About },
    { path: '/contact', component:Contact },
    { path: '/Support', component:Support },
    { path: '/lowi', component:Lowi },
    { path: '/kyc', component:KYC },
    { path: '/', exact: true, component:Main },
];

export default routes;