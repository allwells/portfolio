import * as resource from "./api/resources";

import Layout from "../components/Layout";
import React from "react";

interface ContactLinkProps {
  username: string,
  platform: string,
  url: string,
}

export default function Contact() {

  const [contacts, setContacts] = React.useState<any>([])

  React.useEffect(() => {
    setContacts(resource.contacts)
  }, [])

  return (
    <Layout
      title={"Contact"}
      contact={"active"}
    >
      <div className="px-5 pt-20 pb-12 sm:px-12 sm:pt-28 dark:text-neutral-200">
        {/* Page heading */}
        <h1 className="mb-4 text-lg font-extrabold cursor-default md:text-2xl dark:text-neutral-300">
          <span className="dark:text-blue-600">$</span> contact{" "}
          <span className="text-md dark:text-rose-500">
            allwell{" "}
            <span className="font-normal dark:text-purple-500">--onen</span>
          </span>
          <span className="animate-ping">_</span>
        </h1>

        {/* page body */}
        <div className="w-full flex justify-center flex-col gap-4 items-center px-0 mt-4 sm:px-8">
          {contacts.map((contact:any) => {
            return(
        <div key={contact.id} className="w-full border py-5 flex justify-start px-3 sm:px-0 sm:justify-center items-center dark:hover:bg-neutral-100/10  dark:border-neutral-700 dark:bg-neutral-200/5 backdrop-blur">
              <ContactLinks {...contact} />
        </div>
            )
          })}
        </div>
      </div>
    </Layout>
  );
}

const ContactLinks = (props: ContactLinkProps) => {
  return (
    <p className="text-sm sm:text-lg dark:text-neutral-100 flex sm:flex-row flex-col">
      {props.platform}<span className="hidden sm:block">:</span>
    <a href={props.url} target="_blank" className="text-blue-600 sm:ml-1 hover:underline">
      {" "}{props.username != 'aleenfestus@gmail.com' ? '@'+props.username : props.username}
      </a>
    </p>
  )
}
