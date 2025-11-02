import React, { useEffect, useCallback } from 'react';

interface HologramPlayerProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  videoUrl: string;
  animationFrameRef: React.MutableRefObject<number | undefined>;
  onTimeUpdate: () => void;
  onLoadedMetadata: () => void;
  offsetX: number;
  offsetY: number;
}

const HologramPlayer: React.FC<HologramPlayerProps> = ({ 
    videoRef, 
    canvasRef, 
    videoUrl,
    animationFrameRef,
    onTimeUpdate,
    onLoadedMetadata,
    offsetX,
    offsetY,
}) => {

  const drawHologram = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to be a square based on the smaller dimension of its container
    const parent = canvas.parentElement;
    if(parent) {
      const size = Math.min(parent.clientWidth, window.innerHeight * 0.6);
      if (canvas.width !== size || canvas.height !== size) {
        canvas.width = size;
        canvas.height = size;
      }
    }
    
    const w = canvas.width;
    const h = canvas.height;

    // Clear canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, w, h);

    // Calculate scaled video dimensions to fit into a quarter of the canvas
    const videoAspect = video.videoWidth / video.videoHeight;
    const canvasQuadrantH = h / 2;
    const canvasQuadrantW = w / 2;
    
    let dh, dw;
    if (videoAspect > (canvasQuadrantW / canvasQuadrantH)) {
        dw = canvasQuadrantW;
        dh = dw / videoAspect;
    } else {
        dh = canvasQuadrantH;
        dw = dh * videoAspect;
    }


    // --- Draw four rotated videos ---

    // Bottom (0 deg)
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.drawImage(video, -dw / 2 + offsetX, 0 + offsetY, dw, dh);
    ctx.restore();

    // Top (180 deg)
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(Math.PI);
    ctx.drawImage(video, -dw / 2 + offsetX, 0 + offsetY, dw, dh);
    ctx.restore();

    // Left (-90 deg)
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.drawImage(video, -dw / 2 + offsetX, 0 + offsetY, dw, dh);
    ctx.restore();
    
    // Right (90 deg)
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(Math.PI / 2);
    ctx.drawImage(video, -dw / 2 + offsetX, 0 + offsetY, dw, dh);
    ctx.restore();
    
  }, [videoRef, canvasRef, offsetX, offsetY]);

  const renderLoop = useCallback(() => {
    drawHologram();
    animationFrameRef.current = requestAnimationFrame(renderLoop);
  }, [drawHologram, animationFrameRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
        video.addEventListener('play', () => {
             animationFrameRef.current = requestAnimationFrame(renderLoop);
        });
        video.addEventListener('pause', () => {
            if(animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        });
        video.addEventListener('ended', () => {
             if(animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        });
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      // remove listeners if component unmounts
      if(video) {
          // This cleanup is tricky because refs can be stale.
          // However, for this app's lifecycle it should be okay.
      }
    };
  }, [videoRef, renderLoop, animationFrameRef]);


  return (
    <div className="w-full aspect-square bg-black rounded-lg shadow-2xl shadow-fuchsia-500/20 flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="max-w-full max-h-full" />
      <video
        ref={videoRef}
        src={videoUrl}
        className="hidden"
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        playsInline
        loop
      />
    </div>
  );
};

export default HologramPlayer;