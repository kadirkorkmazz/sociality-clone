import React from 'react';
import { BiBlock } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CgMoreO } from 'react-icons/cg';
import noImage from '../img/no-post-image.png';

import { AiOutlineLike, AiOutlineShareAlt, AiOutlineEye } from 'react-icons/ai';

import { MdOutlineModeComment } from 'react-icons/md';

import { FaFacebookF } from 'react-icons/fa';
function Card({ date, content, image }) {
  return (
    <div className='card'>
      <div className='cardLeftBar'>
        <FaFacebookF size={23} />
      </div>
      <div className='cardRightArea'>
        <div className='cardTopActions'>
          <div className='cardDate'>{date}</div>
          <div className='cardActions'>
            <BiBlock size={18} />
            <RiDeleteBin6Line size={18} />
            <CgMoreO size={18} />
          </div>
        </div>
        <div className='cardContent'>{content}</div>
        <img
          src={image}
          alt='test'
          onError={(e) => {
            e.currentTarget.src = noImage;
          }}
        ></img>
        <div className='cardBottomActions'>
          <div>
            <AiOutlineLike size={17} />
            <span>0</span>
          </div>
          <div>
            <MdOutlineModeComment size={17} />
            <span>0</span>
          </div>
          <div>
            <AiOutlineShareAlt size={17} />
            <span>0</span>
          </div>
          <div>
            <AiOutlineEye size={17} />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
