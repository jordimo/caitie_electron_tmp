import { IpcMessages } from "../../Constants";
import React from 'react';

declare const window: any;

export const Home = () => {

    const openBrowser = () => {
        console.log(IpcMessages.TEST_SHELL);
        window.api.send(IpcMessages.TEST_SHELL);
    };

    return (
        <div>
            <h5 className="text-center">
                Microsoft Authentication Library For Node Electron Sample
            </h5>
            <br />
            <button onClick={openBrowser}>google</button>
        </div>
    );
}
