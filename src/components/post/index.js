import {useRef} from 'react';
import PropTypes from 'prop-types';
import Header from './header';

export default function Post({content}) {
  return (
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-16">
      <Header username={content.username} />
    </div>
  );
}
Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imgaeSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikePhoto: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
  }),
};