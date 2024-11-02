

const Cook = () => {
    return (
        <div className="w-[30%] mt-12 card border border-[#e0e0e2]">
            <div className="card-body items-center w-11/12 mx-auto p-0">
                <h2 className="card-title mt-6">Want to cook: {}</h2>
                <div className="divider"></div>
                <div className="flex items-center text-[#878787] gap-16">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
            </div>
        </div>
    );
};

export default Cook;