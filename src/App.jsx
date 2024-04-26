import { Col, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBatteryFull } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { MdOutlineNetworkWifi } from "react-icons/md";
import { useEffect, useState } from "react";
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
  const [cardHeight, setCardHeight] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    function resizeCard() {
      const screenHeight = window.innerHeight;
      const maxHeight = 967;
      const ratio = 430 / maxHeight;

      const newHeight = Math.min(screenHeight, maxHeight);
      const newWidth = newHeight * ratio;

      setCardHeight(newHeight);
      setCardWidth(newWidth);
    }

    resizeCard();
    window.addEventListener("resize", resizeCard);

    return () => {
      window.removeEventListener("resize", resizeCard);
    };
  }, []);

  // working//
  const [showNotifications, setShowNotifications] = useState(false);
  let startY = 0;

  const handleTouchStart = (e) => {
    startY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const endY = e.changedTouches[0].clientY;
    const deltaY = endY - startY;
    const minSwipe = 50; // minimum swipe distance in pixels

    if (deltaY > minSwipe) {
      // Swipe down
      setShowNotifications(true);
    } else if (deltaY < -minSwipe) {
      // Swipe up
      setShowNotifications(false);
    }
  };
  // working//
  return (
    <div className="home-screen" style={{ width: cardWidth, height: cardHeight }}>
      <main
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={showNotifications ? "show-notifications notificationSection" : "notificationSection"}
      >
        <div className="screenWallpaper">
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
        </div>

        <div className="notification-section">
          <ul>
            <li className="text-danger">Notification 1</li>
            <li>Notification 2</li>
            {/* Add more notifications here */}
          </ul>
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
