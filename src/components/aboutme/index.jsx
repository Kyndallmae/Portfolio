function About() {
    return (
      <div className="row mx-3 py-5 about">
        <div className="col-12 col-lg-4 text-center">
          <img
            className="profile-pic"
            src="./img/profilepic.jpeg"
            alt="Profile Pic"
          />
        </div>
        <div className="about-me col-12 col-lg-8 px-5 my-5">
          <h1 className="display-4 pb-1">About Me</h1>
          <p className="about-p">
          Teacher-turned-Web Developer! As a driven and tech-savvy web developer, 
          I have always had a strong gravitational pull toward technology. 
          I am currently pursuing an intensive web development coding certificate at Southern Methodist University. 
          I am gaining experience in the foundations of web development while honing my skills in HTML5, CCS, Bootstrap, JavaScript, jQuery, 
          and a bit of Python and MySQL.
          </p>
          <p className="about-p">
          Having an appetite for continuous learning, collaboration, and problem-solving, 
          I plan to create and maintain websites while also developing iOS and Android apps.
          Equally passionate about building applications that assist people to make their lives easier. 
          Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset.
          </p>
        </div>
      </div>
    );
  }
  
  export default About;