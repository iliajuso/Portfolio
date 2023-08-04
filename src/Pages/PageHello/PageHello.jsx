import React, {useState, useEffect} from 'react';
import s from './PageHello.module.css'
import blue from "./assets/004_BYMishaisakadze_US7309921.jpg"
import twocomp from "./assets/043_BYMishaisakadze_Untitled Session7300030.jpg"
import look from "./assets/045_BYMishaisakadze_Untitled Session7300045.jpg"
import smile from "./assets/054_BYMishaisakadze_Untitled Session7309890.jpg"

export const PageHello = () => {
   const [currentImage, setCurrentImage] = useState(0);
  const images = [blue, twocomp, look, smile];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 2 seconds

    return () => {
      clearInterval(timer); // Clean up the timer on component unmount
    };
  }, [])
  

  return (
    <main className={s.pageHello}>
        <div className={s.pageHello__text}>
            <div className={s.pageHello__text_top}>
                <p className={s.pageHello__textSuptext}>Hi all. I am</p>
                <h1 className={s.pageHello__h1}>Ilia Jusoevi</h1>
                <p className={s.pageHello__textSubtext}>&gt;Front-end developer</p>
            </div>
            <div className={s.pageHello__text_bottom}>
                {/* <p className={s.desktop}>&#47;&#47;complete the game to continue</p> */}
                <p className={s.desktop}>&#47;&#47;you can also see it on my Github page</p>
                <p className={s.mobile}>&#47;&#47;find my profile on Github:</p>
                <p><span className={s.blue}>const</span> <span className={s.green}>githubLink</span><span className={s.white}> = </span> 
                <a className={s.pageHello__a} href="“https://github.com/iliajuso”">“https://github.com/iliajuso”</a>
                </p>
            </div>
        </div>
        <div className={s.pageHello__game}>
              <div className={s.game__wrapper}>
                {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Ilia Jusoevi"
              className={currentImage === index ? s.active : s.inactive}
            />
          ))}
             </div>
        </div>
        <div className={s.blurGreen}></div>
        <div className={s.blurBlue}></div>
    </main>
    );
};
