'use client'
import React from 'react';
import gsap from 'gsap';
const onEnter = (event) => {
  const currentTarget = event.currentTarget;
  gsap.to(currentTarget, {
    scale: 1.05,
    ease: "sine.out"
  });
  gsap.to(currentTarget.querySelector('.title'), {
    color: '#000',
  });
  gsap.to(currentTarget.querySelector('.text'), {
    color: '#000',
  });
};

const onLeave = (event) => {
  const currentTarget = event.currentTarget;
  gsap.to(currentTarget, {
    scale: 1,
    ease: "sine.out"
  });
  gsap.to(currentTarget.querySelector('.title'), {
    color: '#AAA',
  });
  gsap.to(currentTarget.querySelector('.text'), {
    color: '#AAA',
  });
};

function List(props) {
  return (
    <div onMouseEnter={onEnter} onMouseLeave={onLeave} className="list flex flex-col gap-2 px-5">
      <div className="title text-lg font-semibold">
        {props.title}
      </div>
      <div className="text">
        {props.text}
      </div>
    </div>
  );
}

export default List;
