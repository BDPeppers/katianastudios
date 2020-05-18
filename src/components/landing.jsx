import React from 'react'
//design assets
import blush from './../imgs/blush.PNG';
// import smile from './../imgs/smile.PNG';
import imgBox from '../components/imgBox';

function Landing (){
    return(
        <>
            <div className="landing">
                <imgBox imgProp={blush} classProp={'imgbox'} altProp={'panda'}/>
                <div className="shadow"></div>
                <h1 className='kstudios'>Katiana Studios</h1>
            </div>
        </>
    ); 
}

export default Landing;