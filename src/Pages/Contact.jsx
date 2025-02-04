import FacebookIcon from "../Assets/Contact/facebook.svg";
import GithubIcon from "../Assets/Contact/github.svg";
import EmailIcon from "../Assets/Contact/email.svg";

const Contact = () => {
  const contact = [
    {
      name: "FacebookIcon",
      value: "https://www.facebook.com/SR.See",
    },
    {
      name: "GithubIcon",
      value: "https://github.com/srseen",
    },
    {
      name: "EmailIcon",
      value: "seereen.2540@gmail.com",
    },
  ];
  return (
    <div className="max-w-full max-h-full">
      <div className="max-w-7xl mx-auto p-16 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {contact.map((item, index) => (
              <a
                key={index}
                href={
                  item.value.includes("@") ? `mailto:${item.value}` : item.value
                }
                className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
              >
                {item.name === "FacebookIcon" && (
                  <img
                    src={FacebookIcon}
                    alt="Facebook"
                    className="w-12 h-12"
                  />
                )}
                {item.name === "GithubIcon" && (
                  <img src={GithubIcon} alt="Github" className="w-12 h-12" />
                )}
                {item.name === "EmailIcon" && (
                  <img src={EmailIcon} alt="Email" className="w-12 h-12" />
                )}
                <span className="text-lg font-medium text-gray-700 break-all text-center">
                  {item.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
