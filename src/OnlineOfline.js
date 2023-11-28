import { useState, useEffect } from "react";
import Body from "./layouts/Body";

function OnlineOfline() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        function onlineHandler() {
            setIsOnline(true);
        }

        function offlineHandler() {
            setIsOnline(false);
        }

        window.addEventListener("online", onlineHandler);
        window.addEventListener("offline", offlineHandler);


        return () => {
            window.removeEventListener("online", onlineHandler);
            window.removeEventListener("offline", offlineHandler);
        };
    }, []);


    return (
        <div>
            {isOnline ? (
                <Body />
            ) : (
                <p>You are offline. Please check your internet connection.</p>
            )}
        </div>
    );
}

export default OnlineOfline;