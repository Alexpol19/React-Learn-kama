import React, { Suspense } from 'react';
import Loader from 'react-loader-spinner';

export const withSuspense = (Component) => {

    return (props) => {
        return <Suspense fallback={<Loader 
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={0} />}>
            <Component {...props} />
        </Suspense>
    }
}