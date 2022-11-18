import * as resource from "./api/resources";

import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
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
      <div className="w-full px-2 pt-20 pb-12 sm:px-8 dark:text-neutral-200">
        {/* Page heading */}
        <PageHeading pageHeading="contact" />

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
