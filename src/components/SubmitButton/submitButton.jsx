import React from 'react';
import './submitButton.scss';

//把input轉成button傳值 type="submit"就能傳送form 這顆是橘色的submit button
const SubmitButton =({children, ...otherProps}) =>(
     <button className="submit-button" {...otherProps}>
        {children}
     </button>
)

export default SubmitButton;