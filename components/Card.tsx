import React from 'react';
import { Models } from 'node-appwrite';
import Link from 'next/link';
import Thumbnail from './Thumbnail';
import { convertFileSize } from '@/lib/utils';
import FormatedDateTime from './FormatedDateTime';
import ActionDropoDown from './ActionDropoDown';

interface CardProps {
  file: Models.Document;
}

const Card: React.FC<CardProps> = ({ file }) => {
  return (
    <Link href={file.url} target="_blank" className="file-card">
      <div className="flex justify-between">
        <Thumbnail
          type={file.type}
          extension={file.extension}
          url={file.url}
          className="!size-20"
          imageClassName="!size-11"
        />
        <div className="flex flex-col items-end justify-between">
          <ActionDropoDown file={file} />
          <p className="body-1">{convertFileSize(file.size)}</p>
        </div>
      </div>
      <div className="file-card-details">
        <p className="subtitle-2 line-clamp-1">{file.name}</p>
        <FormatedDateTime
          date={file.$createdAt}
          className="body-2 text-light-100"
        />
        <p className="caption line-clamp-1 text-light-200">
          By: {file.owner?.fullName} {/* Fixed typo here */}
        </p>
      </div>
    </Link>
  );
};

export default Card;
