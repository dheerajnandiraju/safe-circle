import React from "react";
import { useParams } from "react-router-dom";

const ChatSection = () => {
  const params = useParams();
  return (
    <div className="w-[85%]">
      {params.id ? (
        <div>ChatSection with id: {params.id}</div>
      ) : (
        <div className="flex h-full w-full justify-center items-center">
          <div className="text-2xl">Select a community to start chatting</div>
        </div>
      )}
    </div>
  );
};

export default ChatSection;
