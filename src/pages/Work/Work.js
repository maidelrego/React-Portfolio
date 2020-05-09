import React, {useEffect} from "react";
import passGen from './password_generator.PNG'
import quiz from './code_quiz.PNG'
import planer from './day-planer.PNG'
import weather from './weather-dashboard.PNG'
import project1 from './project1.PNG'
import project2 from './project2.PNG'
import './index.css'

function Work() {

  useEffect(() => {
    window.scrollTo(0, 940)
  }, [])


  return (
    <section id="work" class="bg-light pt-4 mt-0 container-fluid">
      <div class="container text-center">
        <h1>Work</h1>
        <img src="./img/web.png" alt="" id="icon" class="mb-2" />

        <div class="row">

          <div class="col-md-6 mb-4">
            <div class="work-container">
              <img src={passGen} alt="" class="img-fluid image" />
              <div class="middle">
                <a class="btn btn-info work-btn mr-3" target="blank" href="https://maidelrego.github.io/password_generator/." role="button">View Project</a>
                <a class="btn btn-info work-btn" target="blank" href="https://github.com/maidelrego/password_generator" role="button">View Code</a>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <div class="work-container">
              <img src={quiz} alt="" class="img-fluid image" />
              <div class="middle">
                <a class="btn btn-info work-btn mr-3" target="blank" href="https://maidelrego.github.io/Code_Quiz/" role="button">View Project</a>
                <a class="btn btn-info work-btn" target="blank" href="https://github.com/maidelrego/Code_Quiz" role="button">View Code</a>
              </div>
            </div>
          </div>

        </div>

        <div class="row">

          <div class="col-md-6 mb-4">
            <div class="work-container">
              <img src={planer} alt="" class="img-fluid image" />
              <div class="middle">
                <a class="btn btn-info work-btn mr-3" target="blank" href="https://maidelrego.github.io/Day_Planner/." role="button">View Project</a>
                <a class="btn btn-info work-btn" target="blank" href="https://maidelrego.github.io/Day_Planner/" role="button">View Code</a>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="work-container">
              <img src={weather} alt="" class="img-fluid image" />
              <div class="middle">
                <a class="btn btn-info work-btn mr-3" target="blank" href="https://maidelrego.github.io/Wheather_Dashboard/" role="button">View Project</a>
                <a class="btn btn-info work-btn" target="blank" href="https://github.com/maidelrego/Wheather_Dashboard" role="button">View Code</a>
              </div>
            </div>
          </div>

        </div>

        <div class="row mb-4 mt-5">
          <div class="col-12">
            <h1>Project 1</h1>
            <div class="work-container">
              <img src={project1} alt="" class="img-fluid image" />
              <div class="middle">
                <a class="btn btn-info work-btn mr-3" target="blank" href="https://mx-jeckal.github.io/Drinky-Links/" role="button">View Project</a>
                <a class="btn btn-info work-btn" target="blank" href="https://github.com/Mx-Jeckal/Drinky-Links" role="button">View Code</a>
              </div>
            </div>

          </div>
        </div>

        <div class="row mb-4 mt-5">
          <div class="col-12">
            <h1>Project 2</h1>
            <div class="work-container">
              <img src={project2} alt="" class="img-fluid image" />
              <div class="middle">
                <a class="btn btn-info work-btn mr-3" target="blank" href="https://floating-temple-73053.herokuapp.com/" role="button">View Project</a>
                <a class="btn btn-info work-btn" target="blank" href="https://github.com/maidelrego/coolgroupname" role="button">View Code</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
    
  );
}

export default Work;
