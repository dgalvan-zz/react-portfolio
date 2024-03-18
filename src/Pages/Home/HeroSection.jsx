export default function HeroSection(){
    const resumeUrl = "./software-usa.pdf"; // URL of your resume PDF file

    const handleDownload = () => {
      // Open the PDF in a new browser window
      window.open(resumeUrl, "_blank");
    };
  
    
    return(
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey...  I am Durley</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full stack </span>{" "}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section--description">
                    I'm deeply passionate about technology and always eager to dive into new challenges.
                        <br/>Let's connect and create something extraordinary together!
                    </p>
                </div>
                <button className="btn btn-primary" onClick={handleDownload}>
          Open my CV
        </button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero-section.png" alt="Hero Section"/>
            </div>

        </section>
    )
}