import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import "./VideoScreen.css";
import { useMediaQuery } from "react-responsive";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import axios from "axios";
import { Spin } from "antd";

const VideoScreen = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });
  const data = [
    {
      id: 1,
      title: "Video 2",
      url: "",
      loop: true,
      isBackBtnVisible: false,
      isNextBtnVisible: true,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: false,
      isGroupBtnVisible: false,
    },
    {
      id: 2,
      title: "Video 3",
      url: "",
      loop: false,
      isBackBtnVisible: true,
      isNextBtnVisible: true,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: true,
      isGroupBtnVisible: false,
    },
    {
      id: 3,
      title: "Video 4",
      url: "",
      loop: true,
      isBackBtnVisible: true,
      isNextBtnVisible: true,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: true,
      isGroupBtnVisible: false,
    },
    {
      id: 4,
      title: "Video 5",
      url: "",
      loop: false,
      isBackBtnVisible: true,
      isNextBtnVisible: true,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: true,
      isGroupBtnVisible: false,
    },
    {
      id: 5,
      title: "Video 6",
      url: "",
      loop: true,
      isBackBtnVisible: true,
      isNextBtnVisible: true,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: true,
      isGroupBtnVisible: false,
    },
    {
      id: 6,
      title: "Video 7",
      url: "",
      loop: false,
      isBackBtnVisible: true,
      isNextBtnVisible: true,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: true,
      isGroupBtnVisible: false,
    },
    {
      id: 7,
      title: "Video 8",
      url: "",
      loop: true,
      isBackBtnVisible: true,
      isNextBtnVisible: true,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: true,
      isGroupBtnVisible: false,
    },
    {
      id: 8,
      title: "Video 9",
      url: "",
      loop: false,
      isBackBtnVisible: true,
      isNextBtnVisible: true,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: true,
      isGroupBtnVisible: false,
    },
    {
      id: 9,
      title: "Video 10",
      url: "",
      loop: true,
      isBackBtnVisible: true,
      isNextBtnVisible: true,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: true,
      isGroupBtnVisible: false,
    },
    {
      id: 10,
      title: "Video 11",
      url: "",
      loop: false,
      isBackBtnVisible: true,
      isNextBtnVisible: true,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: true,
      isGroupBtnVisible: false,
    },
    {
      id: 11,
      title: "Video 12",
      url: "",
      loop: true,
      isBackBtnVisible: true,
      isNextBtnVisible: true,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: true,
      isGroupBtnVisible: false,
    },
    {
      id: 12,
      title: "Video 13",
      url: "",
      loop: false,
      isBackBtnVisible: true,
      isNextBtnVisible: true,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: true,
      isGroupBtnVisible: false,
    },
    {
      id: 13,
      title: "Video 14",
      url: "",
      loop: true,
      isBackBtnVisible: true,
      isNextBtnVisible: false,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: true,
      isGroupBtnVisible: true,
    },
    {
      id: 14,
      title: "Video 15",
      url: "",
      loop: false,
      isBackBtnVisible: true,
      isNextBtnVisible: false,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: false,
      isGroupBtnVisible: true,
    },
    {
      id: 15,
      title: "Video 16",
      url: "",
      loop: false,
      isBackBtnVisible: true,
      isNextBtnVisible: false,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: false,
      isGroupBtnVisible: true,
    },
    {
      id: 16,
      title: "Video 17",
      url: "",
      loop: false,
      isBackBtnVisible: true,
      isNextBtnVisible: false,
      isJumpToEndBtnVisible: false,
      isJumpToStartVisible: false,
      isGroupBtnVisible: true,
    },
  ];
  const [playList, setPlayList] = useState(data);
  const [playIndex, setPlayIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const player = useRef();
  const handle = useFullScreenHandle();

  const downloadVideo = (url, id) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((response) => {
        //setLoading(true);
        setPlayList((prevState) => {
          return prevState.map((obj) => {
            if (obj.id === id) {
              console.log("COMPLETE");
              if (id === 8) {
                setLoading(false);
              }
              return { ...obj, url: window.URL.createObjectURL(response.data) };
            }
            return obj;
          });
        });
      });
  };

  useEffect(() => {
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_33v1ofvn/format/download/protocol/https/flavorParamIds/0",
      1
    );
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_fagetadr/format/download/protocol/https/flavorParamIds/0",
      2
    );
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_pmq7ah3h/format/download/protocol/https/flavorParamIds/0",
      3
    );
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_8szdju8a/format/download/protocol/https/flavorParamIds/0",
      4
    );
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_3ka5dadf/format/download/protocol/https/flavorParamIds/0",
      5
    );
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_ar9vvrcy/format/download/protocol/https/flavorParamIds/0",
      6
    );
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_ggxik8lq/format/download/protocol/https/flavorParamIds/0",
      7
    );
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_8ylpwydx/format/download/protocol/https/flavorParamIds/0",
      8
    );
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_7kxq6kf8/format/download/protocol/https/flavorParamIds/0",
      9
    );
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_5rtzalv6/format/download/protocol/https/flavorParamIds/0",
      10
    );
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_240n35sw/format/download/protocol/https/flavorParamIds/0",
      11
    );
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_0o6cgsm3/format/download/protocol/https/flavorParamIds/0",
      12
    );
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_kytugcb9/format/download/protocol/https/flavorParamIds/0",
      13
    );
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_ol3gc0dp/format/download/protocol/https/flavorParamIds/0",
      14
    );
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_2agxgh6m/format/download/protocol/https/flavorParamIds/0",
      15
    );
    downloadVideo(
      "https://cdnapisec.kaltura.com/p/895641/sp/89564100/playManifest/entryId/1_uxc6xiby/format/download/protocol/https/flavorParamIds/0",
      16
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="react-player">
      <div>
        <img
          className="full-screen-btn"
          src={require("../../assets/FullScreen_Button.png")}
          alt=""
          onClick={handle.enter}
        />
      </div>
      <FullScreen handle={handle}>
        <Spin spinning={loading} size="large">
          {playList[playIndex].isJumpToStartVisible && (
            <div className={playList[playIndex].loop ? "" : "disabled"}>
              <img
                className={
                  isMobile
                    ? "navigation-btn-jump-to-start-mobile"
                    : "navigation-btn-jump-to-start"
                }
                src={require("../../assets/Jump_to_start.png")}
                alt=""
                onClick={() => {
                  setPlayIndex(0);
                }}
              />
            </div>
          )}
          {!loading && playList[playIndex].isJumpToEndBtnVisible && (
            <div className={playList[playIndex].loop ? "" : "disabled"}>
              <img
                className={
                  playIndex === 0 && isMobile
                    ? "navigation-btn-jump-to-end-mobile-index"
                    : isMobile
                    ? "navigation-btn-jump-to-end-mobile"
                    : playIndex === 0 && !isMobile
                    ? "navigation-btn-jump-to-end-index"
                    : "navigation-btn-jump-to-end"
                }
                src={require("../../assets/Jump_To_end.png")}
                alt=""
                onClick={() => {
                  setPlayIndex(playList.length - 4);
                }}
              />
            </div>
          )}

          {playList[playIndex].isBackBtnVisible && (
            <div className={playList[playIndex].loop ? "" : "disabled"}>
              <img
                className={
                  isMobile ? "navigation-btn-mobile" : "navigation-btn"
                }
                src={require("../../assets/Back_Button.png")}
                alt=""
                onClick={() => {
                  if (playIndex - 2 < 0) {
                    setPlayIndex(0);
                  } else {
                    setPlayIndex(playIndex - 2);
                  }
                }}
              />
            </div>
          )}

          {!loading && playList[playIndex].isNextBtnVisible && (
            <div className={playList[playIndex].loop ? "" : "disabled"}>
              <img
                className={isMobile ? "next-btn-mobile" : "next-btn"}
                src={require("../../assets/Next_Button.png")}
                alt=""
                onClick={() => {
                  setPlayIndex(playIndex + 1);
                }}
              />
            </div>
          )}

          {playList[playIndex].isGroupBtnVisible && (
            <React.Fragment>
              <div className={playList[playIndex].loop ? "" : "disabled"}>
                <img
                  className={isMobile ? "nzt-button-mobile" : "nzt-button"}
                  src={require("../../assets/NZT_button.png")}
                  alt=""
                  onClick={() => {
                    setPlayIndex(playList.length - 3);
                  }}
                />
                <img
                  className={isMobile ? "h2t-button-mobile" : "h2t-button"}
                  src={require("../../assets/H2T_button.png")}
                  alt=""
                  onClick={() => {
                    setPlayIndex(playList.length - 2);
                  }}
                />

                <img
                  className={
                    isMobile ? "hy-green-button-mobile" : "hy-green-button"
                  }
                  src={require("../../assets/HyGreen_Button.png")}
                  alt=""
                  onClick={() => {
                    setPlayIndex(playList.length - 1);
                  }}
                />
              </div>
            </React.Fragment>
          )}
          <ReactPlayer
            muted={true}
            ref={player}
            className="react-player"
            playing={true}
            // light={true}
            controls={false}
            url={playList[playIndex].url}
            loop={playList[playIndex].loop}
            onEnded={() => {
              if (playList.length - 4 < playIndex) {
                setPlayIndex(playList.length - 4);
              } else {
                setPlayIndex(playIndex + 1);
              }
            }}
            width="100vw"
            height="100%"
          />
        </Spin>
      </FullScreen>
    </div>
  );
};
export default VideoScreen;
