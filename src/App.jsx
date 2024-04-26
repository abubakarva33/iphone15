import { Col, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBatteryFull } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { MdOutlineNetworkWifi } from "react-icons/md";
import { useState } from "react";
const appData = [
  {
    title: "messenger",
    image: "messenger",
  },
  {
    title: "facebook",
    image: "facebook",
  },
  {
    title: "gmail",
    image: "gmail",
  },
  {
    title: "drive",
    image: "drive",
  },
  {
    title: "keeps",
    image: "keeps",
  },
  {
    title: "linkedin",
    image: "linkedin",
  },
  {
    title: "meet",
    image: "meet",
  },
  {
    title: "weather",
    image: "weather",
  },
  {
    title: "youtube",
    image: "youtube",
  },
  {
    title: "zoom",
    image: "zoom",
  },
  {
    title: "messenger",
    image: "messenger",
  },
  {
    title: "facebook",
    image: "facebook",
  },
  {
    title: "gmail",
    image: "gmail",
  },
  {
    title: "drive",
    image: "drive",
  },
  {
    title: "keeps",
    image: "keeps",
  },
  {
    title: "linkedin",
    image: "linkedin",
  },
  {
    title: "meet",
    image: "meet",
  },
  {
    title: "weather",
    image: "weather",
  },
  {
    title: "youtube",
    image: "youtube",
  },
  {
    title: "zoom",
    image: "zoom",
  },
];

const speedApps = [
  {
    title: "messenger",
    image: "messenger",
  },
  {
    title: "facebook",
    image: "facebook",
  },
  {
    title: "gmail",
    image: "gmail",
  },
  {
    title: "drive",
    image: "drive",
  },
];

function App() {
  const [showNotifications, setShowNotifications] = useState(false);
  let startY = 0;

  const handleTouchStart = (e) => {
    startY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const endY = e.changedTouches[0].clientY;
    const deltaY = endY - startY;
    const minSwipe = 50;

    if (deltaY > minSwipe) {
      setShowNotifications(true);
    } else if (deltaY < -minSwipe) {
      setShowNotifications(false);
    }
  };

  const handleMouseDown = (e) => {
    startY = e.clientY;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const endY = e.clientY;
    const deltaY = endY - startY;
    const minSwipe = 50;

    if (deltaY > minSwipe) {
      setShowNotifications(true);
    } else if (deltaY < -minSwipe) {
      setShowNotifications(false);
    }
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };
  return (
    <div className="home-screen">
      <main
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        className={
          showNotifications ? "show-notifications notificationSection" : "notificationSection"
        }
      >
        <div className="screenWallpaper">
          <div className="screen-header">
            <span style={{ fontSize: 12 }}>10:00</span>
            <div>
              <span>
                <GiNetworkBars />
              </span>
              <span>
                <MdOutlineNetworkWifi />
              </span>
              <span>
                <FaBatteryFull />
              </span>
            </div>
          </div>
          <div className="appLists">
            <Row xs={4} sm={4} md={4}>
              {appData?.map((item, ind) => (
                <Col key={ind}>
                  <div className="appItemEach">
                    <img src={`/images/${item?.image}.png`} alt="" className="appImage" />
                    <p className="text-capitalize appTitle">{item?.title}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="speedApps">
            <Row xs={4} sm={4} md={4}>
              {speedApps?.map((item, ind) => (
                <Col key={ind}>
                  <div className="appItemEach">
                    <img src={`/images/${item?.image}.png`} alt="" className="appImage" />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        <div className="notification-section">
          <div className="screen-header px-3">
            <span style={{ fontSize: 12 }}>10:00</span>
            <div>
              <span>
                <GiNetworkBars />
              </span>
              <span>
                <MdOutlineNetworkWifi />
              </span>
              <span>
                <FaBatteryFull />
              </span>
            </div>
          </div>
          <p>More Items</p>
        </div>
      </main>
      <img src="/images/camera.webp" alt="" className="cameraNotch" />
      {/* <div className="screenWallpaper">
        <div className="screen-header">
          <span>10:00</span>
          <div>
            <span>
              <GiNetworkBars />
            </span>
            <span>
              <MdOutlineNetworkWifi />
            </span>
            <span>
              <FaBatteryFull />
            </span>
          </div>
        </div>
        <div className="appLists">
          <Row xs={4} sm={4} md={4}>
            {appData?.map((item, ind) => (
              <Col key={ind}>
                <div className="appItemEach">
                  <img src={`/images/${item?.image}.png`} alt="" className="appImage" />
                  <p className="text-capitalize">{item?.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="speedApps">
          <Row xs={4} sm={4} md={4}>
            {speedApps?.map((item, ind) => (
              <Col key={ind}>
                <div className="appItemEach">
                  <img src={`/images/${item?.image}.png`} alt="" className="appImage" />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div> */}
    </div>
  );
}

export default App;
