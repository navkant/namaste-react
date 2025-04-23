const Contact = () => {
    return (
        <div>
            <div>
                <h1 className="font-bold text-3xl p-4 m-4"> Contact Us Page</h1>
            </div>
            <div className="m-10">
                <div>
                    <form action="" className="">
                        <div>
                            <input
                                type="test"
                                className="m-2 border-2 border-black rounded-lg p-1"
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <input
                                type="test"
                                className="m-2 border-2 border-black rounded-lg p-1"
                                placeholder="Message"
                            />
                        </div>
                        <div>
                            <input
                                type="test"
                                className="m-2 border-2 border-black rounded-lg p-1"
                                placeholder="Email"
                            />
                        </div>
                        <button className="m-2 border-2 border-black rounded-lg p-1">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
