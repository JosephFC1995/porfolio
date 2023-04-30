import { IWorkItem } from '@/pages';
import { ExternalLink, Eye } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import Button from '../Button';
import { motion } from 'framer-motion';

interface WorkItemProps extends IWorkItem {
  key: number;
}

const WorkItem: FC<WorkItemProps> = ({ title, description, tags, image, previewLink = null, repositoryLink = null }) => {
  return (
    <>
      <div className="group block">
        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src="/images/work.webp"
            alt="Work"
            fill
            style={{
              objectFit: 'cover',
            }}
            className="hover:scale-105 transition-all duration-300"
          ></Image>
        </div>
        <div className="relative">
          <h3 className="mb-3">{title}</h3>
          {tags.length > 0 && (
            <ul className="mb-4 flex gap-3 text-xs">
              {tags.map((tag, index) => {
                return (
                  <li key={index} className="rounded-full bg-black px-3 py-1 font-bold text-white">
                    {tag}
                  </li>
                );
              })}
            </ul>
          )}

          <p className="mb-4 text-gray">{description}</p>
          <motion.div className="grid grid-cols-2 gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
            {previewLink && (
              <Button size="small" href="#" target="_blank">
                <Eye width={20} height={20}></Eye>
                <span>Preview</span>
              </Button>
            )}
            {ExternalLink && (
              <Button size="small" variant="outline" href="#" target="_blank">
                <ExternalLink width={20} height={20}></ExternalLink>
                <span>Repository</span>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WorkItem;
