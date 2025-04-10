import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";

const About = () => {
    about_data = {
        name: "Navkant (Class Based   compo)",
        location: "Ghaziabad",
        contact: "@xcorp.com",
    };
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React webseries.</h2>
            <User />
            <UserClass data={about_data} />
            <UserContext.Consumer>
                {({ loggedInUser }) => (
                    <h1 className="font-semibold">{loggedInUser}</h1>
                )}
            </UserContext.Consumer>
        </div>  
    );
};

export default About;
