import { useRef, useState } from "react";
import { PanGestureHandler, State } from "react-gesture-handler";

const NotificationBar = ({ notifications = [] }) => {
  

  return (
    <PanGestureHandler onGestureEvent={handlePanGesture}>
      <h1>fxjgdf</h1>
    </PanGestureHandler>
  );
};
export default NotificationBar;
