import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import SearchBar from "./search-bar";
import { useParams, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserPlus } from "lucide-react";

const SideBar = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.slingacademy.com/v1/sample-data/photos"
      );
      const data = await response.json();
      setUserData(data);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  const params = useParams();

  const handleClick = (item) => {
    navigate(`/community/${item}`);
  };

  return (
    <div className="w-72 h-[calc(100vh-64px)] bg-white flex flex-col justify-between shadow-md overflow-auto">
      <div className="flex flex-col">
        <SearchBar />
        <Dialog>
          <DialogTrigger className="bg-[#df4542] px-2 h-12 rounded-md mx-2 flex items-center justify-center m-1">
            New Group <UserPlus className="ml-2 outline-none" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <div className="flex flex-col space-y-2 h-full">
          {userData?.photos?.map((user) => (
            <Button
              key={user.id}
              className={`flex w-full h-16 space-x-2 py-2 rounded-none justify-start items-center px-4 hover:bg-slate-200 hover:text-black ${
                params.id === user.id
                  ? "bg-slate-200 text-black"
                  : "bg-white text-black"
              }`}
              onClick={() => {
                handleClick(user.id);
              }}
            >
              <img
                src={user.url}
                alt={user.title}
                className="w-10 h-10 rounded-full"
              />
              <div className="text-sm font-semibold truncate">{user.title}</div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
