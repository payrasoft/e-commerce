import React, { useState } from "react";
import Footer from "../../Shear/Footer/Footer";
import Menubar from "../../Shear/Menubar/Menubar";
import AboutIMG from "../../Images/aboutIMG/st_about_image.png";
import bg_img from "../../Images/aboutIMG/st_about_shape.png";
import sig_img from "../../Images/aboutIMG/st_about_signature.png";
import Ab_left from "../../Images/aboutIMG/about_left_01-al.png";
import Ab_right from "../../Images/aboutIMG/about_right_image-al.png";
import dimond from "../../Images/aboutIMG/dimond.jpg";
import handHous from "../../Images/aboutIMG/handHouse.jpg";
import Team1 from "../../Images/tem_membar/al_team_01.png";
import Team2 from "../../Images/tem_membar/al_team_02.png";
import Team3 from "../../Images/tem_membar/al_team_03.png";
import Team4 from "../../Images/tem_membar/al_team_04.png";
import Team5 from "../../Images/tem_membar/al_team_05.png";
import Team6 from "../../Images/tem_membar/al_team_06.png";
import Team7 from "../../Images/tem_membar/al_team_07.png";

// clients
import client1 from "../../Images/Client/02 55.png";
import client2 from "../../Images/Client/02.png";
import client3 from "../../Images/Client/03.png";
import client4 from "../../Images/Client/04-1.png";
import client5 from "../../Images/Client/04.png";
import client6 from "../../Images/Client/07.png";
import client7 from "../../Images/Client/08.png";
import client8 from "../../Images/Client/12.png";
import client9 from "../../Images/Client/client-02.png";
import client10 from "../../Images/Client/client-03.png";
import client11 from "../../Images/Client/client-04.png";
import client12 from "../../Images/Client/client-06.png";

import ModalVideo from "react-modal-video";

const AboutUs = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="about_us_area" id="about_us_area">
        <Menubar />
        <div className="about_us_inner pb-5">
          <div className="container py-5">
            <div className="top_about py-5">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about_img">
                    <img src={bg_img} alt="" />
                    <div className="inner_img">
                      <img src={AboutIMG} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about_content">
                    <h6>about us</h6>
                    <h2>
                      Our mission is to Make <br /> your life easier.
                    </h2>
                    <p>
                      Lost the plot A bit of how's your father have it barmy
                      brilliant off his nut lurgy well, bodge chap some dodgy
                      chav say say chip shop, cup of tea Elizabeth I don't want
                      no agro is baking cakes bite your arm off. Jolly good what
                      a plonker loo happy days easy peasy faff about cheers it's
                      your round chip shop tinkety tonk old fruit bugger all
                      mate.
                    </p>
                    <div className="sig_area">
                      <img src={sig_img} alt="" />
                      <p>Jim Séchen - Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_service_area">
          <div className="container py-5">
            <div className="top_about_service_area">
              <h6>EXPLORE OUR GREAT HISTORY!</h6>
              <h2>
                One of the world's largest IT <br /> Providers since 2004.
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="date">
                  <p>
                    December 2010 <br /> to Present
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="date">
                  <p>
                    January 2014
                    <br /> to July 2018
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="date">
                  <p>
                    April 2016
                    <br /> to Feb 2018
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="date">
                  <p>
                    September 2018
                    <br /> to Oct 2020
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="inner_about_service_content">
                  <h6>Hello World!</h6>
                  <h2>Welcome here!</h2>
                  <p>
                    I the little rotter cheers hotpot brilliant A bit of how's
                    your father cracking goal gutted mate.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="inner_about_service_content">
                  <h6>First Work!</h6>
                  <h2>Wpmet Productive</h2>
                  <p>
                    I the little rotter cheers hotpot brilliant A bit of how's
                    your father cracking goal gutted mate.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="inner_about_service_content">
                  <h6>WordPress Plugin</h6>
                  <h2>ElementsKit</h2>
                  <p>
                    I the little rotter cheers hotpot brilliant A bit of how's
                    your father cracking goal gutted mate.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="inner_about_service_content">
                  <h6>Working on</h6>
                  <h2>UX Design</h2>
                  <p>
                    I the little rotter cheers hotpot brilliant A bit of how's
                    your father cracking goal gutted mate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="design_agency_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="agency_text">
                  <h2>
                    We're a
                    <br /> Creative Design Agency <br /> That Gets Excited
                    About.
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="agency_text">
                  <p>
                    The wireless pardon me have it jolly good car boot a my good
                    sir, tosser gutted mate amongst Oxford golly gosh cheers, is
                    brilliant chinwag brown bread me old mucker. Matie boy Harry
                    blow off say tickety-boo, brown bread buggered the full
                    monty don't get shirty with me, up the kyver Oxford you mug.
                    Lemon squeezy bamboozled lurgy smashing bender he legged it
                    amongst spiffing, arse tomfoolery Jeffrey easy peasy don't
                    get shirty with me cack bleeder.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <div className="left_img">
                  <img src={Ab_left} alt="" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="right_img">
                  <img src={Ab_right} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_who_are_you">
          <div className="container">
            <div className="top_who text-center">
              <h2>Who are we?</h2>
              <p>
                Say a load of old tosh no biggie gosh argy-bargy Jeffrey up the
                kyver you mug buggered <br /> tosser, chip shop on your bike
                mate.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="inner_who">
                  <img src={dimond} alt="" />
                  <h2>Our Vision</h2>
                  <p>
                    What a plonker a load of old tosh naff chap bum bag give us
                    a bell, cobblers cup of tea you mug morish that I,
                    bog-standard posh mufty he lost his bottle. Starkers Harry
                    ruddy cor blimey guvnor I don't want no agro no biggie owt
                    to do with me cack mush, bog only a quid blatant the
                    wireless.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inner_who">
                  <img src={handHous} alt="" />
                  <h2>Our Mission</h2>
                  <p>
                    What a plonker a load of old tosh naff chap bum bag give us
                    a bell, cobblers cup of tea you mug morish that I,
                    bog-standard posh mufty he lost his bottle. Starkers Harry
                    ruddy cor blimey guvnor I don't want no agro no biggie owt
                    to do with me cack mush, bog only a quid blatant the
                    wireless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our_team_area">
          <div className="container">
            <div className="top_team_text text-center">
              <h2>Meet the Team</h2>
              <p>
                Say a load of old tosh no biggie gosh argy-bargy Jeffrey up the
                kyver you mug buggered <br /> tosser, chip shop on your bike
                mate.
              </p>
            </div>
            <div className="team_member_area">
              <div className="row py-4">
                <div className="col-lg-3">
                  <div className="inner_team_membar">
                    <img src={Team1} alt="" />
                    <h2>Jim Séchen</h2>
                    <h5>Founder & CEO</h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="inner_team_membar">
                    <img src={Team2} alt="" />
                    <h2>Barry Tone</h2>
                    <h5>Developer</h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="inner_team_membar">
                    <img src={Team3} alt="" />
                    <h2>Weir Doe</h2>
                    <h5>Designer</h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="inner_team_membar">
                    <img src={Team4} alt="" />
                    <h2>Samuel Serif</h2>
                    <h5>Junior Developer</h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="inner_team_membar">
                    <img src={Team5} alt="" />
                    <h2>Pelican Steve</h2>
                    <h5>Marketing & Sales</h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="inner_team_membar">
                    <img src={Team6} alt="" />
                    <h2>Gordon Norma</h2>
                    <h5>Junior Designer</h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="inner_team_membar">
                    <img src={Team7} alt="" />
                    <h2>Jonquil Von</h2>
                    <h5>Tech Support</h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="inner_team_membar">
                    <img src={Team1} alt="" />
                    <h2>Will Barrow</h2>
                    <h5>Tech Support</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_video_area py-5">
          <div className="container py-5">
            <div className="inner_video py-5">
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="https://youtu.be/GpBbFhoWEYI"
                onClose={() => setOpen(false)}
              />

              <button className="btn-primary" onClick={() => setOpen(true)}>
                VIEW DEMO
              </button>
            </div>
          </div>
          <div className="container">
            <div className="row pb-5">
              <div className="col-lg-6 my-2">
                <div className="inner_left_area">
                  <h2>
                    Get this Awesome <br /> Theme today.
                  </h2>
                  <p>
                    Tomfoolery happy days young delinquent <br /> pear shaped in
                    my flat lurgy super.
                  </p>
                  <button>Get Started Now</button>
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div className="inner_right_site">
                  <h3>Problem</h3>
                  <p>
                    He nicked it that lavatory wind up lemon squeezy bevvy
                    bonnet chip shop well, mufty porkies what a plonker at
                    public school bodge are you taking the piss daft morish
                    mush.
                  </p>
                  <h3 className="pt-5">Success</h3>
                  <p>
                    Say a load of old tosh no biggie gosh argy-bargy Jeffrey up
                    the kyver you mug buggered tosser, chip shop on your bike
                    mate tickety-boo spiffing good time say me old mucker
                    fantastic brown bread pardon you, spiffing bleeding Eaton
                    don't get shirty with me blower zonked bits.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-5">
            <div className="counter_inner_area">
              <div className="row py-5">
                <div className="col-lg-4 text-center my-2">
                  <div className="count">
                    <h2>2M+</h2>
                    <p>
                      Customers visit wpmet every month to <br /> get their
                      service done.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 text-center my-2">
                  <div className="count">
                    <h2>96%</h2>
                    <p>
                      Satisfaction rate comes from our <br /> awesome customers.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 text-center my-2">
                  <div className="count">
                    <h2>4.9</h2>
                    <p>
                      Average customer ratings we have got all <br /> over
                      internet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="client_full_area py-5">
            <div className="container py-5">
              <div className="clients_area text-center py-5">
                <h2 className="pb-5">
                  Join 40k+ of our happy clients. <br /> Discover and enjoy
                </h2>
                <p>
                  Through the years have partnered with great companies all over
                  the world.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="clients_img">
                    <img src={client1} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="clients_img">
                    <img src={client2} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="clients_img">
                    <img src={client3} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="clients_img">
                    <img src={client4} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="clients_img">
                    <img src={client5} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="clients_img">
                    <img src={client6} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="clients_img">
                    <img src={client7} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="clients_img">
                    <img src={client8} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="clients_img">
                    <img src={client9} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="clients_img">
                    <img src={client10} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="clients_img">
                    <img src={client11} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="clients_img">
                    <img src={client12} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
