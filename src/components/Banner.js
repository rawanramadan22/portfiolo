import { Container ,Row ,Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import { useState,  useEffect } from "react";
import headerImg from "../components/images/home-main.541f8179af8209ce03ccf2178fe62dbf.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Banner =()=>{
const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "frontend developer", "backend developer", "fullstack developer" ];
  const period = 2000;
   
   useEffect(() =>{
    let ticker = setInterval(()=>{
tick();
    },delta);
    return () =>{clearInterval(ticker)};
   } ,[text])

   const tick =() =>{
    let i =loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText =isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting){
        setDelta(PrevDelta => PrevDelta/2);

    }

    if(!isDeleting && updatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
        setIndex(prevIndex => prevIndex - 1);
    }else if(isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum +1);
        setIndex(1);
        setDelta(500);
    }else {
        setIndex(prevIndex => prevIndex + 1);
      }
   }


    return (
        <section className="banner" id="home">
            <div id="tsparticles"><canvas data-generated="false" ></canvas></div>
            <div className="Container">
<Container  >
    <Row className="algin-items-center" >
        <Col xs={12}  md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1 class="heading" >Hi There!<span class="wave" role="imgg" aria-labelledby="wave">👋🏻</span></h1>
         <h1>{`I'm Rawan Ramadan`}</h1>
         <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "frontend developer", "backend developer", "fullstack developer" ]'><span className="wrap">{text}</span></span>
                    
       <p>I Have A Lot Of Experince In Web Development</p>
        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}></ArrowRightCircle> </button>
        </div>}
            </TrackVisibility>
        
        </Col>
<Col xs={12}  md={6} xl={5}>
<div>
                  <img src={headerImg} alt="Header Img"/>
                </div>
</Col>
    </Row>
</Container>
</div>
        </section>
    )
}
/////////////////////////////////

