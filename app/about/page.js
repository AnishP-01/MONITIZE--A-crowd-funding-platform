const About = () => {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center text-white px-8">
          <div className=" flex  text-3xl m-4 gap-2 justify-center items-center">
            About MONETIZE_Get_Funds &nbsp;!
            <span>
              <img className="w-10 invert pb-4 " src="/coffee-cup.png" alt="" />
            </span>
          </div>
          <div className='flex flex-col justify-center items-center w-[900px]'>
            <p className="p-5 text-l">

            MONETIZE_Get_Funds is a crowdfunding platform designed for creators to fund their projects with the support of their fans. It's a space where your fans can directly contribute to your creative endeavors by buying you a coffee. Unlock the potential of your fanbase and bring your projects to life.

          </p>
          <h2 className='text-xl font-bold'>How It Works</h2>
              <p className="p-5 text-l">
                Fans Want to Collaborate
                Your fans are enthusiastic about collaborating with you on your projects.
              </p>

              <h2 className='text-xl font-bold'>Benefits for Creators</h2>
              <p className="p-5 text-l">
                • Direct financial support from your fanbase
                 <br />
                 • Engage with your fans on a more personal level
                 <br />
                 • Access to a platform tailored for creative projects
                 <br />
              </p>
              <h2 className='text-xl font-bold'>Benefits for Supporters</h2>
              <p className="p-5 text-l">
                • Directly contribute to the success of your favorite creators
                <br />                                              
                • Exclusive rewards and perks for supporting creators
                <br />                                                    
                • Be part of the creative process and connect with creators
                <br />

              </p>
              <h2 className='text-xl font-bold'>Benefits for Collabration</h2>
              <p className="p-5 text-l">
              • Unlock new opportunities through collaboration with fellow creators
              <br />
              • Expand your network and reach a wider audience
              <br />
              • Combine skills and resources to create innovative projects
              <br />

              </p>
              <h2 className='text-xl font-bold'>Community Engagement</h2>
              <p className="p-5 text-l">
              • Contact with a supportive community of like-minded individuals
              <br /> 
              • Receive valuable feedback and encouragement from peers
              <br />
              • Parrticipate in discussions and events centered around your interests
              <br />
              </p>
              <h2 className='text-xl font-bold'>Support Through Coffee</h2>
              <p className="p-5 text-l">
              Receive support from your supporters in the form of coffee purchases, directly contributing to your project funding.

              </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About


export const metadata = {
  title: "About - MONETIZE",
}