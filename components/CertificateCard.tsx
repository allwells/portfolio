import React from "react";

type Props = {
  title: string;
  organization: string;
  organizationLink: string;
  dateIssued: string;
  expiryDate?: string;
  credentialId: string;
  credentialLink?: string;
};

function CertificateCard(props: Props) {
  return (
    <div className="flex flex-col items-start justify-between flex-grow flex-shrink gap-5 p-3 text-xs transition duration-200 border cursor-default dark:hover:bg-white/10 dark:border-neutral-700 backdrop-blur dark:bg-neutral-100/5 dark:text-neutral-300">
      <div>
        {/* card title */}
        <h3 className="text-sm font-bold text-neutral-50">{props.title}</h3>

        {/* organization */}
        <a
          href={props.organizationLink}
          target="_blank"
          rel="noreferrer"
          className="underline dark:hover:text-blue-500"
        >
          {props.organization}
        </a>

        {/* dates */}
        <div className="flex flex-col items-start justify-center gap-2 mt-3 w-fit">
          <span>
            <span className="font-semibold">Date Issued:</span>{" "}
            {props.dateIssued}
          </span>
          <span>
            <span className="font-semibold ">Expiry Date:</span>{" "}
            {props.expiryDate ? props.expiryDate : "No expiration date"}
          </span>
        </div>

        {/* certificate ID */}
        {props.credentialId ? (
          <p className="mt-3">Credential ID: {props.credentialId}</p>
        ) : null}
      </div>

      {/* link to certificate */}
      {props.credentialLink ? (
        <a
          href={props.credentialLink}
          target="_blank"
          rel="noreferrer"
          className="text-base dark:text-blue-600"
        >
          [
          <span className="text-xs dark:text-neutral-200 md:dark:text-neutral-400 md:dark:hover:text-neutral-100">
            See Credential
          </span>
          ]
        </a>
      ) : null
      // <button type="button" className="text-sm dark:text-blue-600">
      //   [
      //   <span className="text-xs dark:text-neutral-200 md:dark:text-neutral-400 md:dark:hover:text-neutral-100">
      //     See Credential
      //   </span>
      //   ]
      // </button>
      }
    </div>
  );
}

export default CertificateCard;
