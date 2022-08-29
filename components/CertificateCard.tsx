import React from "react";

type CertificateCardProps = {
  title: string;
  organization: string;
  organizationLink: string;
  dateIssued: string;
  expiryDate?: string;
  credentialId: string;
  credentialLink?: string;
};

function CertificateCard(props: CertificateCardProps) {
  return (
    <div className="flex-grow flex-shrink p-3 text-sm transition duration-200 border cursor-default dark:hover:bg-white/10 dark:border-neutral-700 backdrop-blur dark:bg-neutral-100/5 dark:text-neutral-300">
      {/* card title */}
      <h3 className="text-base font-bold text-neutral-50">{props.title}</h3>

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
      <div className="flex flex-col items-start justify-center gap-2 mt-3 sm:mt-0 sm:items-center sm:flex-row sm:justify-between w-fit">
        <span>
          <span className="block font-semibold sm:hidden">Date Issued:</span>{" "}
          {props.dateIssued}
        </span>
        <span className="hidden sm:block">-</span>
        <span>
          <span className="block font-semibold sm:hidden">Expiry Date:</span>{" "}
          {props.expiryDate ? props.expiryDate : "No expiration date"}
        </span>
      </div>

      {/* certificate ID */}
      <p className="mt-3 mb-3">Credential ID: {props.credentialId}</p>

      {/* link to certificate */}
      {props.credentialLink ? (
        <a
          href={props.credentialLink}
          target="_blank"
          rel="noreferrer"
          className="text-base dark:text-blue-600"
        >
          [
          <span className="text-sm dark:text-neutral-400 dark:hover:text-neutral-100">
            See Credential
          </span>
          ]
        </a>
      ) : (
        <button type="button" className="text-base dark:text-blue-600">
          [
          <span className="text-sm dark:text-neutral-400 dark:hover:text-neutral-100">
            See Credential
          </span>
          ]
        </button>
      )}
    </div>
  );
}

export default CertificateCard;
