import { useNavigate } from "react-router-dom";
import { CiCamera } from "react-icons/ci";
import React, { useState, useRef } from "react";

import { CgComponents } from "react-icons/cg";

const CameraCapture = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [image, setImage] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Start the camera
  const startCamera = async () => {
    try {
      console.log("Trying to access the camera...");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      console.log("Camera stream obtained");

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        console.log("Video reference set");
      } else {
        console.error("videoRef is null");
      }

      setIsCameraOn(true);
    } catch (err) {
      console.error("Error accessing the camera: ", err);
    }
  };

  // Stop the camera
  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      console.log("Camera stopped");
    }
    setIsCameraOn(false);
  };

  // Capture a photo from the video feed
  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    if (video && canvas) {
      console.log("Capturing photo...");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL("image/png"); // Convert to data URL
      setImage(imageData);
      console.log("Photo captured");
      stopCamera(); // Optionally stop the camera after capturing
    } else {
      console.error("video or canvas is null");
    }
  };

  return (
    <div className=" ">
      {isCameraOn ? (
        <>
          <video ref={videoRef} autoPlay style={{ width: "100%" }} />
          <button onClick={capturePhoto}>Take Photo</button>
        </>
      ) : (
        <button onClick={startCamera}>Start Camera</button>
      )}
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      {image && (
        <div>
          <h3>Captured Photo:</h3>
          <img src={image} alt="Captured" />
        </div>
      )}
    </div>
  );
};

function HittadSkopa() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
 
    <div className="h-screen custom-background flex justify-center px-8 font-Fredoka">
      <div className="max-w-screen-lg p-4">
        <h1 className="mt-20 text-4xl text-center">SKOPA UPPTÄCKT!</h1>

        <div className="text-center">
          <ul className="list-disc mt-20 justify-center">
            <li>Ta kort på skopan du hittat</li>
            <li>Klicka på “dela upptäckt”</li>
            <li>Ditt fynd kan nu hittas av andra grävskopsälskare!</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <CiCamera className="text-9xl" />
        </div>

        <CameraCapture />
      </div>
    </div>

  );
}

export default HittadSkopa;
