import React from 'react';

const iconProps = {
  className: "w-6 h-6",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
};

export const PlayIcon = () => (
  <svg {...iconProps}><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path></svg>
);

export const PauseIcon = () => (
  <svg {...iconProps}><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h1a1 1 0 001-1V8a1 1 0 00-1-1H8zm3 0a1 1 0 00-1 1v4a1 1 0 001 1h1a1 1 0 001-1V8a1 1 0 00-1-1h-1z"></path></svg>
);

const volumeIconProps = {
    className: "w-6 h-6 text-slate-400",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
};

export const VolumeHighIcon = () => (
    <svg {...volumeIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
);

export const VolumeMediumIcon = () => (
    <svg {...volumeIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
);

export const VolumeLowIcon = () => (
    <svg {...volumeIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
);

export const VolumeMuteIcon = () => (
    <svg {...volumeIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" d="M17 14l-4-4m0 4l4-4" /></svg>
);

export const ResetIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.18-3.185m-3.181-4.991A8.25 8.25 0 009.345 2.985L6.165 6.166m12.023 9.348L15.845 12.5" />
    </svg>
);

export const LogoutIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
    </svg>
);

const statIconProps = {
    className: "w-12 h-12 text-fuchsia-400",
    fill:"none",
    viewBox: "0 0 24 24",
    strokeWidth:"1.5",
    stroke: "currentColor",
}

export const HologramIcon = () => (
    <svg {...statIconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9.75l-9-5.25m9 5.25v9.75" />
    </svg>
);

export const ClockIcon = () => (
    <svg {...statIconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const ProjectsIcon = () => (
    <svg {...statIconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5-13.5h16.5M3.75 6h16.5M3.75 12h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
    </svg>
);