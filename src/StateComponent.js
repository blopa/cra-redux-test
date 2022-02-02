import { useEffect } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        result: state.simpleReducer.result,
    };
};
const StateComponent = ({ result }) => {
    useEffect(() => {
        console.log({ result });
    }, []);

    return (
        <p>Foobar? {result} </p>
    );
};

export default connect(mapStateToProps)(StateComponent);
