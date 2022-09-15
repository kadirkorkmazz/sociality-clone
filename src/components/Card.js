import React from 'react';
import noImage from '../img/no-post-image.png';
import { BiBlock } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CgMoreO } from 'react-icons/cg';
import { MdOutlineModeComment, MdDone } from 'react-icons/md';
import { FaFacebookF, FaRetweet } from 'react-icons/fa';
import {
  AiOutlineLike,
  AiOutlineShareAlt,
  AiOutlineEye,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineHeart,
} from 'react-icons/ai';

function Card({ date, content, image, channel, status }) {
  return (
    <div className='card'>
      <div className={`cardLeftBar status${status}`}>
        {channel === 'facebook' ? (
          <FaFacebookF size={23} />
        ) : channel === 'twitter' ? (
          <AiOutlineTwitter size={23} />
        ) : (
          <AiOutlineInstagram size={23} />
        )}
      </div>
      <div className='cardRightArea'>
        <div className='cardTopActions'>
          <div className='cardDate'>{date}</div>
          <div className='cardActions'>
            {status === 0 ? (
              <MdDone size={18} />
            ) : status === 1 ? (
              <BiBlock size={18} />
            ) : (
              ''
            )}
            <RiDeleteBin6Line size={18} />
            <CgMoreO size={18} />
          </div>
        </div>
        <div className='cardContent'>{content}</div>
        <img
          src={image}
          alt='post img'
          onError={(e) => {
            e.currentTarget.src = noImage;
          }}
        ></img>
        <div className='cardBottomActions'>
          <div>
            {channel === 'twitter' ? (
              <AiOutlineHeart size={20} />
            ) : (
              <AiOutlineLike size={20} />
            )}
            <span>0</span>
          </div>
          <div>
            {channel === 'twitter' ? (
              <FaRetweet size={20} />
            ) : (
              <MdOutlineModeComment size={20} />
            )}
            <span>0</span>
          </div>
          <div>
            <AiOutlineShareAlt size={20} />
            <span>0</span>
          </div>
          <div>
            <AiOutlineEye size={20} />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
