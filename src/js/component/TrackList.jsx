import React, { useEffect, useRef, useState } from "react";

export function TrackList(props) {
  const control = useRef(false);
  useEffect(() => {
    if (control.current == true) {
      for (let i = 0; i < props.songlist.length; i++) {
        document.getElementById(i).children[0].classList.value =
          " text-light ms-3 mb-0 mb-md-0 mb-lg-0 ";
        document.getElementById(i).children[1].classList.value =
          " text-light ms-5 mb-0 mb-md-0 mb-lg-0 ";
      }
      document.getElementById(props.index).children[0].classList.value =
        " text-success ms-3 mb-0 mb-md-0 mb-lg-0 ";
      document.getElementById(props.index).children[1].classList.value =
        " text-success ms-5 mb-0 mb-md-0 mb-lg-0 ";
    }
  }, [props.index]);

  const createPlaylist = props.songlist.map((value, index) => {
    return (
      <div className="row row-cols-1 px-0 mx-0 px-sm-0 mx-sm-0 px-md-0 px-lg-0 mx-lg-0  border-bottom  border-light border-1 border-opacity-25">
        <div
          className=" col d-flex  p-3 align-items-center"
          style={{ backgroundColor: "#0d1b2a" }}
          onClick={(e) => {
            {
              props.geturl(e.target.id);
              props.setIndex(e.target.id);
              props.setIsPlaying(true);
              control.current = true;

              console.log(e);
            }
          }}
          id={index}
        >
          <p
            className=" text-light ms-3 mb-0 mb-md-0 mb-lg-0 "
            onClick={(e) => {
              props.geturl(e.target.parentElement.id);
              props.setIndex(e.target.parentElement.id);
              e.stopPropagation();
              props.setIsPlaying(true);
            }}
          >
            {value.id}
          </p>
          <p
            className="text-light ms-5 mb-0 mb-md-0 mb-lg-0"
            onClick={(e) => {
              props.geturl(e.target.parentElement.id);
              props.setIndex(e.target.parentElement.id);
              e.stopPropagation();
              props.setIsPlaying(true);
            }}
          >
            {value.name}
          </p>
        </div>
      </div>
    );
  });

  return createPlaylist;
}
