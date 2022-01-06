import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import GatsbyImage from '../gatsby-image';
import {
  PostCardWrapper,
  PostPreview,
  PostDetails,
  PostExcerpt,
  PostTitle,
  ReadMore,
} from './post-card.style';

interface PostCardProps {
  image?: any;
  title: string;
  excerpt?: string;
  url: string;
  date?: string;
  tags?: [];
  className?: string;
}

const PostCard: React.FunctionComponent<PostCardProps> = ({
  image,
  title,
  url,
  excerpt,
  date,
  tags,
  className,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['post_card'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <PostCardWrapper className={addAllClasses.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
            <GatsbyImage src={image} alt="post preview" />
          </Link>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        <PostTitle className="post_title">
          <Link to={url}>{title}</Link>
        </PostTitle>
        <PostExcerpt
          dangerouslySetInnerHTML={{
            __html: excerpt,
          }}
        />
        <ReadMore>
          <Link to={url}>Read More</Link>
        </ReadMore>
      </PostDetails>
    </PostCardWrapper>
  );
};

export default PostCard;
