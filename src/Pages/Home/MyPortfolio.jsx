import data from "../../data/index.json"
export default function MyPortfolio(){
    return(
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">Recent Projects</p>
                    <h2 className="section--heading--">My Portfolio</h2>
                </div>
                <div>
                <a href="https://github.com/dgalvan-zz" target="_blank" rel="noopener noreferrer" className="btn btn-github">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.11.82-.257.82-.577 0-.285-.01-1.04-.015-2.038-3.338.724-4.042-1.613-4.042-1.613C4.31 18.022 3.53 17.6 3.53 17.6c-1.08-.738.083-.723.083-.723 1.194.084 1.82 1.23 1.82 1.23 1.06 1.817 2.78 1.292 3.46.99.107-.768.415-1.29.755-1.59-2.647-.3-5.42-1.324-5.42-5.89 0-1.3.465-2.365 1.235-3.198-.135-.303-.54-1.52.105-3.16 0 0 1.005-.32 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.55 3.285-1.23 3.285-1.23.645 1.64.24 2.855.12 3.16.765.833 1.23 1.898 1.23 3.198 0 4.578-2.78 5.585-5.435 5.88.42.365.81 1.096.81 2.21 0 1.596-.015 2.88-.015 3.27 0 .32.215.695.825.575C20.566 21.798 24 17.3 24 12c0-6.627-5.373-12-12-12z"
      fill="currentColor"
    />
  </svg>
  Visit My GitHub
</a>


                </div>
            </div>
            <div className="portfolio--section--container">
            {data?.portfolio?.map((item, index)=>(
                   <div key={index} className="portfolio--section--card">
                    <div className="portfolio--section--img">
                        <img src={item.src} alt="Placeholder"/>
                    </div>
                    <div className="portfolio--section--card--content">
                        <div>
                            <h3 className="portfolio--section--title"> {item.title}</h3>
                            <p className="text--md">{item.description}</p>
                        </div>
                        <p className="text-sm portfolio--link">
                        <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                    {item.link}
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>


                    </div>

                   </div>
                )) }

            </div>
        </section>
    )
}