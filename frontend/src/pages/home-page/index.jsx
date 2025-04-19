import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FeatureBox = ({ imageSrc, heading, content }) => {
  return (
    <div className="mb-8 p-5 bg-white rounded-lg shadow-md">
      <img src={imageSrc} alt={heading} className="w-20 h-20 mb-4 rounded-lg mx-auto" />
      <div className="text-center">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">{heading}</h3>
        <p className="text-sm md:text-base lg:text-lg">{content}</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif">
        Welcome to Safe Circle
      </h1>
      <p className="text-base md:text-lg lg:text-xl mb-6">
        Safe Circle is your all-in-one solution for a secure and connected gated community. Explore the features that empower and simplify your community living experience:
      </p>

      <div className="mb-8">
        <FeatureBox
          imageSrc="https://pbirwanda.org/wp-content/uploads/2020/08/5.0-Our-community_MainIllustration-1920x1152.png"
          heading="Community News"
          content="Stay informed about the latest updates, events, and news within your gated community."
        />
      </div>

      <div className="mb-8">
        <FeatureBox
          imageSrc="https://webstockreview.net/images/community-icon-png-9.png"
          heading="Bills and Payments"
          content="Easily manage and pay your community bills, including maintenance fees and utilities, with just a few clicks."
        />
      </div>

      <div className="mb-8">
        <FeatureBox
          imageSrc="https://unitedwaycha.org/wp-content/uploads/2019/09/Community-Engagement-Icon-e1568843794736-1080x1138.png"
          heading="Security Alerts"
          content="Receive real-time security notifications and updates, ensuring a safe living environment."
        />
      </div>

      <div className="mb-8">
        <FeatureBox
          imageSrc="https://tse2.mm.bing.net/th?id=OIP.Dgi37Mxgokjnf4qgdrwXUQHaHa&pid=Api&P=0&h=180"
          heading="Community Directory"
          content="Connect with your neighbors through an organized community directory. Access contact information and build a stronger community network."
        />
      </div>

      <div className="mb-8">
        <FeatureBox
          imageSrc="https://www.pngmart.com/files/6/Time-Attendance-System-PNG-HD.png"
          heading="Attendance Tracker"
          content="Keep track of attendance for community events, meetings, and gatherings."
        />
      </div>

      {/* Additional Feature Boxes */}
      <div className="mb-8">
        <FeatureBox
          imageSrc="https://tse1.mm.bing.net/th?id=OIP.EE9suNpxGP2qDd8cm0JV7AHaIG&pid=Api&P=0&h=180"
          heading="Guidelines"
          content="Access community guidelines and rules to ensure a harmonious living environment."
        />
      </div>

      <div className="mb-8">
        <FeatureBox
          imageSrc="https://www.pngplay.com/wp-content/uploads/6/Community-Logo-Transparent-Background.png"
          heading="Notices"
          content="Stay updated on important notices and announcements from the community administration."
        />
      </div>

      <div className="mb-8">
        <FeatureBox
          imageSrc="https://cdn.iconscout.com/icon/premium/png-512-thumb/complaint-2289066-1908666.png"
          heading="Complaints"
          content="Submit and track community-related complaints to ensure a quick resolution."
        />
      </div>

      <div className="mb-8">
        <FeatureBox
          imageSrc="https://www.pngplay.com/wp-content/uploads/6/Community-Background-PNG-Image.png"
          heading="Salary Dues"
          content="Track and manage salary dues for community staff and services."
        />
      </div>

      <div className="mb-8">
        <FeatureBox
          imageSrc="http://www.pixabytessolutions.com/uploads/1/9/9/6/19964309/cctv-graphics-01_2_orig.png"
          heading="CCTV Tracking"
          content="Monitor and track the CCTV feed to enhance community security."
        />
      </div>

      <div className="flex justify-center mr-4">
        <Link to="/signup">
          <Button className="bg-blue-500 text-white hover:bg-blue-700">Join our Neighborhood</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
