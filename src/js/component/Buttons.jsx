import React, { useEffect, useRef, useState } from "react";

export function Buttons(props) {
    const buttonPlay = useRef(null);
  
    function nextSong() {
      props.controlPause();
      let playListSize = props.songlist.length;
      if (props.index < playListSize - 1) {
        let nextIndex = +props.index + 1;
        props.setIndex(nextIndex);
        props.geturl(nextIndex);
        props.controlPlay();
      } else {
        props.setIndex(0);
        props.geturl(0);
      }
    }
  
    function prevSong() {
      props.controlPause();
      if (props.index !== 0) {
        let nextIndex = +props.index - 1;
        props.setIndex(nextIndex);
        props.geturl(nextIndex);
        props.controlPlay();
      } else {
        props.setIndex(18);
        props.geturl(18);
      }
    }
  
    return (
      <div className="container sticky-bottom">
        <div className="row row-cols-md-1">
          <div
            className="navbar col"
            style={{ backgroundColor: "#252A31", minHeight: "70px" }}
          >
            <div className="container-fluid justify-content-center">
              <span className="navbar-brand mb-0 h1 text-light fw-light ms-2">
                <button
                  style={{ color: "#000000" }}
                  onClick={() => {
                    prevSong();
                    props.setIsPlaying(true);
                  }}
                >
                  Prev
                </button>
                {props.isPlaying ? (
                  <button
                    style={{ color: "#000000" }}
                    onClick={() => {
                      props.controlPause();
                      props.setIsPlaying(false);
                    }}
                  >
                    Pause
                  </button>
                ) : (
                  <button
                    ref={buttonPlay}
                    style={{ color: "#000000" }}
                    onClick={() => {
                      props.controlPlay();
                      props.setIsPlaying(true);
                    }}
                  >
                    Play
                  </button>
                )}
                <button
                  style={{ color: "#000000" }}
                  onClick={() => {
                    nextSong();
                    props.setIsPlaying(true);
                  }}
                >
                  Next
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
