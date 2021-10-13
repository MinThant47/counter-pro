import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { client } from "../../client";
import "./detail.css";
import letter from "../../Assets/bd letter.jpg";
import footer from "../../Assets/footer.jpg";
import crowd from "../../Assets/crowd saying hb.mp3";
import BDSong from "../../Assets/birthday song.mp3";
import { confetti } from "./confetti";

const Detail = () => {
  const { name } = useParams();
  const [people, setPeople] = useState([]);

  const crowdRef = useRef();
  const crowdRef2 = useRef();
  const bdRef = useRef();

  const start = () => {
    setTimeout(() => {
      confetti.start();
    }, 200);
  };

  start();

  useEffect(() => {
    client
      .getEntries({ content_type: "birthdayInfo", "fields.name": name })
      .then((res) => {
        setPeople(res.items);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [name]);

  useEffect(() => {
    crowdRef.current.play();

    setTimeout(function () {
      crowdRef2.current.play();
    }, 3000);

    setTimeout(function () {
      bdRef.current.play();
    }, 3000);
  });

  return (
    <>
      <audio ref={crowdRef} id="birthday-crowd" controls>
        <source src={crowd} type="audio/mp3" />
      </audio>

      <audio ref={crowdRef2} controls>
        <source src={crowd} type="audio/mp3" />
      </audio>

      <audio ref={bdRef} controls loop>
        <source src={BDSong} type="audio/mp3" />
      </audio>
      {people.length !== 0 && (
        <div>
          <img
            src={people[0].fields.landingImage.fields.file.url}
            alt=""
            className="img-fluid w-100"
          />

          <div className="bd-photo">
            {people[0].fields.birthdayPhoto.map((bd) => {
              return (
                <img
                  key={bd.fields.title}
                  src={bd.fields.file.url}
                  alt=""
                  className="photo"
                />
              );
            })}
          </div>

          <div className="bd-photo-content">
            <p className="text">
            {people[0].fields.birthdayPhotoNote}
            </p>
            <div className="decoration">
              <div className="block yellow"></div>
              <div className="block pink"></div>
              <div className="block blue"></div>
              <div className="block yellow"></div>
            </div>
          </div>
          <div className="letter">
            <div className="card">
              <div className="imgBox">
                <img src={letter} alt="" />
              </div>
              <div className="details">
                <p id="wish">{people[0].fields.birthdayWish}</p>
              </div>
            </div>

            <div className="letter-content">
              <p className="text">
                စိတ်ထဲရှိတာတွေ ရေးတတ်သလောက် <br />
                ရေးထားတဲ့ <strong> Birthday Wish လေးပါ။ </strong>
                <i className="uil uil-envelope"></i>
              </p>
              <div className="letter-decoration">
                <div className="block-2 yellow"></div>
                <div className="block-2 pink"></div>
                <div className="block-2 blue"></div>
                <div className="block-2 yellow"></div>
              </div>
              <span className="text">
                Mouse နဲ့ထောက်ပြီး ဖတ်ကြည့်လိုက်နော်။
                <i className="uil uil-mouse-alt"></i>
              </span>
            </div>
          </div>

          <img className="img-fluid footer-img" src={footer} alt="" />
        </div>
      )}
    </>
  );
};

export default Detail;
