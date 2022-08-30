import * as resource from "./api/resources";

import Layout from "../components/Layout";
import React from "react";

interface ContactLinkProps {
  username: string;
  platform: string;
  url: string;
}

export default function Contact() {
  const [contacts, setContacts] = React.useState<any>([]);

  React.useEffect(() => {
    setContacts(resource.contacts);
  }, []);

  return (
    <Layout title={"Contact"} contact={"active"}>
      <div className="px-2 pt-20 pb-12 sm:px-8 sm:pt-28 dark:text-neutral-200">
        {/* Page heading */}
        <div className="flex items-center justify-start w-full mb-4">
          <h1 className="text-base font-extrabold cursor-default md:text-xl dark:text-lime-500">
            <span className="dark:text-blue-600">$</span> contact{" "}
            <span className="text-md dark:text-red-500">
              allwell{" "}
              <span className="font-normal dark:text-emerald-500">--onen</span>
            </span>
            <span className="text-white animate-ping">_</span>
          </h1>
        </div>

        {/* page body */}
        <div className="flex flex-col items-center justify-center w-full gap-4 px-0 mt-4 sm:px-8">
          {contacts.map((contact: any) => {
            return (
              <div
                key={contact.id}
                className="flex items-center justify-start w-full px-3 py-5 border sm:px-0 sm:justify-center dark:hover:bg-neutral-100/10 dark:border-neutral-700 dark:bg-neutral-200/5 backdrop-blur"
              >
                <ContactLinks {...contact} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

const ContactLinks = (props: ContactLinkProps) => {
  return (
    <p className="flex flex-col text-xs sm:text-base dark:text-neutral-100 sm:flex-row">
      {props.platform}
      <span className="hidden sm:block">:</span>
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 sm:ml-1 hover:underline"
      >
        {" "}
        {props.username != "aleenfestus@gmail.com"
          ? "@" + props.username
          : props.username}
      </a>
    </p>
  );
};
