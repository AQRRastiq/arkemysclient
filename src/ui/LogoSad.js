import React, { memo } from 'react';

const Logo = ({ size, pointerCursor }) => {
  return (
    <img src="https://raw.githubusercontent.com/AQRRastiq/arkemysclient/main/src/ui/arkemysicon_512x512.png"></img>
  );
};

export default memo(Logo);
