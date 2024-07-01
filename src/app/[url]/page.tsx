"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const URL = usePathname().split("/").pop();
  console.log(URL);
  const [recievedUrl, setRecievedUrl] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:8000/getURL/${URL}`).then((res) => {
      console.log(res);
      setRecievedUrl(res.data);
    });
  }, [URL]);
  useEffect(() => {
    if (recievedUrl.length > 0) {
      router.push(recievedUrl);
    }
  }, [recievedUrl, router]);
  return (
    <div>{recievedUrl.length > 0 ? `` : "Redirecting Please Wait..."}</div>
  );
};

export default Page;
