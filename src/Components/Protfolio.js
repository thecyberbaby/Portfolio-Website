import React from "react";

const Portfolio = () => {
  return (
    <div id='portfolio'>
      <div>
        <h2 class='center' style={{ paddingBottom: "50px" }}>
          My Projects
        </h2>
      </div>

      <div className='row container portfolio-row'>
              <div className='col l4 s12 portfolio'>
                <h5>AWS </h5>

                <div class='slider'>
                  <ul class='slides'>
                    <li>
                      <img
                        src='/images/slides/aws.png'
                        alt='github search app 1'
                      />
                    </li>
                    <li>
                      <img
                        src='/images/slides/GITHUB_APP2.png'
                        alt='github search app 2'
                      />
                    </li>
                    <li>
                      <img
                        src='/images/slides/GITHUB_APP3.png'
                        alt='github search app 3'
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col l4 s12 portfolio-col-2'>
                <h5>Kubernetes </h5>

                <div class='slider'>
                  <ul class='slides '>
                    <li>
                      <img src='/images/slides/kubernetes.jpeg' alt='lco courses1' />
                    </li>
                    <li>
                      <img src='/images/slides/LCO_COURSES2.png' alt='lco courses2' />
                    </li>
                    <li>
                      <img src='/images/slides/LCO_COURSES3.png' alt='lco courses3' />
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col l4 s12 portfolio'>
                        <h5>Tarraform </h5>

                        <div class='slider'>
                          <ul class='slides'>
                            <li>
                              <img src='/images/slides/terraform.png' alt='otp exim1' />
                            </li>
                            <li>
                              <img src='/images/slides/OTP_EXIM2.png' alt='otp exim2' />
                            </li>
                            <li>
                              <img src='/images/slides/OTP_EXIM3.png' alt='otp exim3' />
                            </li>
                          </ul>
                        </div>
                      </div>

            </div>

      <div className='row container portfolio-row'>
        <div className='col l4 s12 portfolio'>
          <h5>ELK STACK </h5>

          <div class='slider'>
            <ul class='slides'>
              <li>
                <img src='/images/slides/elk.png' alt='otp exim1' />
              </li>
              <li>
                <img src='/images/slides/OTP_EXIM2.png' alt='otp exim2' />
              </li>
              <li>
                <img src='/images/slides/OTP_EXIM3.png' alt='otp exim3' />
              </li>
            </ul>
          </div>
        </div>

        <div className='col l4 s12 portfolio-col-2'>
          <h5>Newrelic </h5>

          <div class='slider'>
            <ul class='slides '>
              <li>
                <img src='/images/slides/newrelic.jpeg' alt='portfolio 1' />
              </li>
              <li>
                <img src='/images/slides/PORTFOLIO2.png' alt='portfolio 2' />
              </li>
              <li>
                <img src='/images/slides/PORTFOLIO3.png' alt='portfolio 3' />
              </li>
            </ul>
          </div>
        </div>

        <div className='col l4 s12 portfolio-col-2'>
                  <h5>Datadog</h5>

                  <div class='slider'>
                    <ul class='slides '>
                      <li>
                        <img src='/images/slides/datadaog.png' alt='portfolio 1' />
                      </li>
                      <li>
                        <img src='/images/slides/PORTFOLIO2.png' alt='portfolio 2' />
                      </li>
                      <li>
                        <img src='/images/slides/PORTFOLIO3.png' alt='portfolio 3' />
                      </li>
                    </ul>
                  </div>
                </div>
      </div>
    </div>
  );
};

export default Portfolio;
