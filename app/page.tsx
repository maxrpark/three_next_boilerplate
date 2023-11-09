"use client";
import { Suspense, useEffect } from "react";

import { SectionTitle, SectionTitleAndDescription } from "./components";
import {
  camera_position_2,
  camera_position_2_mobile,
  cameraLookAt_2,
  cameraLookAt_2_mobile,
  camera_position_3,
  camera_position_3_mobile,
  cameraLookAt_3,
  cameraLookAt_3_mobile,
  camera_position_4,
  camera_position_4_mobile,
  cameraLookAt_4,
  cameraLookAt_4_mobile,
  camera_position_5,
  camera_position_5_mobile,
  cameraLookAt_5,
  cameraLookAt_5_mobile,
  camera_position_6,
  camera_position_6_mobile,
  cameraLookAt_6,
  cameraLookAt_6_mobile,
  camera_position_7,
  camera_position_7_mobile,
  cameraLookAt_7,
  cameraLookAt_7_mobile,
  camera_position_8,
  camera_position_8_mobile,
  cameraLookAt_8,
  cameraLookAt_8_mobile,
  camera_position_9,
  camera_position_9_mobile,
  cameraLookAt_9,
  cameraLookAt_9_mobile,
  camera_position_10,
  camera_position_10_mobile,
  cameraLookAt_10,
  cameraLookAt_10_mobile,
  camera_position_1,
  camera_position_1_mobile,
  cameraLookAt_1,
  cameraLookAt_1_mobile,
} from "./utils/modelPositions";
import { useProgress } from "@react-three/drei";
import ThreeCanvas from "./components/home/ThreeCanvas";

const App: React.FC = () => {
  const { progress } = useProgress();

  return (
    <main>
      <Suspense fallback={<h2>Loading</h2>}>
        <div data-scroll className='main-content-wrapper'>
          <SectionTitleAndDescription
            cameraPositionDesktop={camera_position_1}
            cameraPositionMobile={camera_position_1_mobile}
            cameraLookAtDesktop={cameraLookAt_1}
            cameraLookAtMobile={cameraLookAt_1_mobile}
          />
          <SectionTitleAndDescription
            cameraPositionDesktop={camera_position_2}
            cameraPositionMobile={camera_position_2_mobile}
            cameraLookAtDesktop={cameraLookAt_2}
            cameraLookAtMobile={cameraLookAt_2_mobile}
          />
          <SectionTitle
            cameraPositionDesktop={camera_position_3}
            cameraPositionMobile={camera_position_3_mobile}
            cameraLookAtDesktop={cameraLookAt_3}
            cameraLookAtMobile={cameraLookAt_3_mobile}
          />
          <SectionTitleAndDescription
            cameraPositionDesktop={camera_position_4}
            cameraPositionMobile={camera_position_4_mobile}
            cameraLookAtDesktop={cameraLookAt_4}
            cameraLookAtMobile={cameraLookAt_4_mobile}
          />
          <SectionTitleAndDescription
            cameraPositionDesktop={camera_position_5}
            cameraPositionMobile={camera_position_5_mobile}
            cameraLookAtDesktop={cameraLookAt_5}
            cameraLookAtMobile={cameraLookAt_5_mobile}
          />
        </div>
        <ThreeCanvas />
      </Suspense>
    </main>
  );
};

export default App;
