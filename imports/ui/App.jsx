import React, { useState } from 'react';

export const App = () => {
    const [isBusy, setIsBusy] = useState(false);

    const login = () => {
        setIsBusy(true);

        Meteor.loginWithGoogle({
            loginStyle: 'popup',
        }, err => {
            setIsBusy(false);

            if (err) {
                // When the popup is closed without logging in, we expect to see a { errorType : "Accounts.LoginCancelledError" } object shape here
                console.error(err);
            } else {
                console.log('Login success');
            }
        });
    };

    return (
        <div>
            <button onClick={login}>{isBusy ? 'Please wait...' : 'Login with Google'}</button>
        </div>
    );
};
