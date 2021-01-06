import moment from "moment";
import { useEffect, useState } from "react";

const formatter = (timestamp) => {
    return moment.unix(timestamp).fromNow();
};

 const ReactMoment =  ({ timestamp, interval }) => {
    const [timestampString, setTimestampString] = useState("");

    useEffect(() => {
        const timer = setInterval(
            () => setTimestampString(formatter(timestamp)),
            interval
        );
        setTimestampString(formatter(timestamp));
        return () => clearInterval(timer);
    }, []);
    return timestampString;
};

 export default ReactMoment;