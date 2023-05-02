import { ExternalLink, Eye } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import Button from '../Button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IWorkItem } from '../home/work';

interface WorkItemProps extends IWorkItem {
  key: number;
}

const WorkItem: FC<WorkItemProps> = ({ title, description, tags, image, previewLink = null, repositoryLink = null }) => {
  const ElementLink: React.ElementType | string = previewLink ? Link : 'span';

  return (
    <>
      <div className="group block">
        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg">
          <ElementLink {...(previewLink && { href: previewLink, target: '_blank' })}>
            <Image
              src={image}
              alt={title}
              fill
              style={{
                objectFit: 'cover',
              }}
              className="transition-all duration-300 group-hover:scale-105"
            ></Image>
          </ElementLink>
        </div>
        <div className="relative">
          <h3 className="mb-3">
            <ElementLink {...(previewLink && { href: previewLink, target: '_blank' })} className="cursor-pointer">
              {title}
            </ElementLink>
          </h3>
          {tags.length > 0 && (
            <ul className="mb-4 flex gap-3 text-xs">
              {tags.map((tag: string, index: number) => {
                return (
                  <li key={index} className="rounded-full bg-black px-3 py-1 font-bold text-white">
                    {tag}
                  </li>
                );
              })}
            </ul>
          )}

          <p className="mb-4 text-gray">{description}</p>
          {/* <motion.div className="grid grid-cols-2 gap-4 transition-all duration-300">
            {previewLink && (
              <Button size="small" href={previewLink} target="_blank">
                <Eye width={20} height={20}></Eye>
                <span>Preview</span>
              </Button>
            )}
            {repositoryLink && (
              <Button size="small" variant="outline" href={repositoryLink} target="_blank">
                <ExternalLink width={20} height={20}></ExternalLink>
                <span>Repository</span>
              </Button>
            )}
          </motion.div> */}
        </div>
      </div>
    </>
  );
};

export default WorkItem;
