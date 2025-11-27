// import token from './public.pem';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'Aurora Launcher',
};

import publicKey from "./public.pem";

export const api = {
  ws: "ws://147.45.215.42:1370/ws",
  web: "http://147.45.215.42:1370",
  publicKey,
};

export const appPath = '.aurora-launcher';
