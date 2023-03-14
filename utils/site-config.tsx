import {
  FaLinkedin , FaPhone, 
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Jourdain Thomas. All Rights Reserved.`,
  author: {
    name: " Jourdain Thomas ",
    accounts: [
      
      {
        url: "https://www.linkedin.com/in/jourdain-thomas-327665a1",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "jothomas2497@gmail.com",
        label: "Jourdain Thomas",
        type: "gray",
        icon: <FiMail />
      },
      {
        url: "tel:2107399926",
        label: 'Phone Number',
        type: "number",
        icon: <FaPhone />
      },
    ]
  }
};

export default siteConfig;