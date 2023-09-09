import User from "./User";
import UserClass from "./UserClass";

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
    </div>
  );
};

export default About;
