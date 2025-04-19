import ChatSection from "@/components/community-components/chat-section";
import SideBar from "@/components/community-components/sidebar";
import { Button } from "@/components/ui/button";
import React from "react";
import { useParams } from "react-router-dom";

const CommunityPage = () => {
  const params = useParams();
  return (
    <div className="flex">
      <SideBar />
      <ChatSection />
    </div>
  );
};

export default CommunityPage;
