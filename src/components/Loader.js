import React from "react";
import LoadingIcon from "../images/loader.gif";

const Loader = props => {
    return (
        <div style={{ height: "80vh" }}>
            <img src={LoadingIcon} className="w-25" style={styles.loaderStyle} />
        </div>
    );
};

const styles = {
    loaderStyle: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
};

export default Loader;