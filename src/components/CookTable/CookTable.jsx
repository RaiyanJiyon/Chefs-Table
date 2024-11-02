import PropTypes from "prop-types";

const Cook = ({ cook }) => {
    console.log(cook)

    return (
        <div className="md:w-[30%] mt-12 card border border-[#e0e0e2]">
            <div className="card-body items-center w-11/12 mx-auto p-0">
                <h2 className="card-title mt-6">Want to cook: { }</h2>
                <div className="divider"></div>
                <div className="flex items-center w-full text-[#878787]">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
            </div>
        </div>
    );
};

Cook.propTypes = {
    cook: PropTypes.array.isRequired
}
export default Cook;