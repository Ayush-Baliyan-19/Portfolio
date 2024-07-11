"use client";
import { useState } from "react";
import axios from "axios";

import { Textarea } from "./ui/textarea";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = async () => {
    const mailUrl = process.env.NEXT_PUBLIC_MAIL_BACKEND_URL;
    try {
      const Message = `Name: ${userDetails.name} \n Email: ${userDetails.email} \n Message: ${userDetails.message}`;
      const response = await axios.post(`${mailUrl}/mail`, {
        email: "ayushbaliyan05@gmail.com",
        message: Message,
      });
      if (response.data.Success) {
        toast({
          title: "Message Received!🎉",
          description:
            "Your message has been recieved , I will get back to you soon😸",
        });
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Card className="mx-auto max-w-full border-none bg-transparent">
      <CardContent>
        <div className="grid gap-4">
          <div className="flex flex-wrap justify-between gap-4">
            <div className="grid w-full gap-2">
              <Input
                id="first-name"
                placeholder="Name"
                className="w-full border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800"
                value={userDetails.name}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, name: e.target.value });
                }}
                required
              />
            </div>
            <div className="grid w-full gap-2">
              <Input
                id="email"
                placeholder="Email"
                required
                className="w-full border-neutral-200  bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800"
                value={userDetails.email}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, email: e.target.value });
                }}
              />
            </div>
          </div>
          <Textarea
            placeholder="Hello, I would like to..."
            rows={6}
            className="border-neutral-200 bg-neutral-50  dark:border-neutral-700 dark:bg-neutral-800"
            value={userDetails.message}
            onChange={(e) => {
              setUserDetails({ ...userDetails, message: e.target.value });
            }}
          />
          <Button
            type="submit"
            className="w-full"
            onClick={(e) => {
              e.preventDefault();
              handleFormSubmit();
            }}
          >
            Send!
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
