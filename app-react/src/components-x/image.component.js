/* ====================================== toast  ====================================== */
import React from 'react';
// ===================================================================== 
export const Image = ({ src, style }) => <img className='w' style={style} src={src} alt=''/>

export const ImageCenter = ({ src, width }) => <div className='fxmc'><Image src={src} style={{width:width}}/></div>

export default { Image, ImageCenter }
