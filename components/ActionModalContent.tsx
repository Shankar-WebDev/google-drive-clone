import { Models } from 'node-appwrite';
import React from 'react';
import Thumbnail from './Thumbnail';
import FormatedDateTime from './FormatedDateTime';
import { convertFileSize, formatDateTime } from '@/lib/utils';

const ImageThumbnail = ({ file }: { file: Models.Document }) => (
  <div className="file-details-thumbnail">
    <Thumbnail type={file.type} extension={file.extension} url={file.url} />
    <div className="flex flex-col">
      <p className="subtitle">{file.name}</p>
      <FormatedDateTime date={file.$createdAt} className="captions" />
    </div>
  </div>
);
const DetaiRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex">
    <p className="file-details-label">{label}</p>
    <p className="file-details-vlaue">{value}</p>
  </div>
);
export const FileDetails = ({ file }: { file: Models.Document }) => {
  return (
    <>
      <ImageThumbnail file={file} />
      <div className="space-y-4 px-2 pt-2">
        <DetaiRow label="Format:" value={file.extension} />
        <DetaiRow label="Size:" value={convertFileSize(file.size)} />
        <DetaiRow label="Owner:" value={file.owner.fullName} />
        <DetaiRow label="Last edit:" value={formatDateTime(file.$updatedAt)} />
      </div>
    </>
  );
};
