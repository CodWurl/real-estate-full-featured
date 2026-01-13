import schecaraHeadshot from "@/assets/schecara-headshot.png";

const About = () => {
  return <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Headshot Photo */}
          <div className="flex justify-center mb-16">
            <img 
              src={schecaraHeadshot} 
              alt="Schecara Acevedo - REALTOR®" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-background"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">​</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural text-pink-dark mb-12">
                About Me   
              </h3>
              
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">Schecara Acevedo is a dedicated REALTOR® with Coldwell Banker Sea Coast Advantage in Jacksonville, NC, where she excels at helping clients navigate significant life moments such as buying or selling their homes. Licensed since 2022, Schecara embodies what it means to be a great REALTOR®—providing exceptional service, extensive market knowledge, and strong negotiation skills. Her passion for real estate stems from a deep-seated desire to connect with people from various backgrounds, making her a trusted ally in the often emotional journey of homeownership.</p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">Specializing in the vibrant Jacksonville community, Schecara appreciates the easy access to the nearby beaches and the unique charm the area offers. Her problem-solving abilities and understanding of the housing market empower her to secure the best deals for her clients, ensuring their real estate experience is smooth and rewarding.

 

Before her career in real estate, Schecara gained valuable skills that she now applies in her transactional dealings, fostering her ability to advocate effectively for her clients. Her tagline, "Keys with Cara," reflects her commitment to unlocking new doors in her clients' lives.

 

Outside of work, When she’s not busy selling homes, she enjoys various hobbies that allow her to recharge and stay connected with her personal interests. With her impressive skill set and genuine care for her clients, Schecara Acevedo is the REALTOR® you want by your side, ensuring the journey to your new home is not only successful but also enjoyable.</p>
              </div>
            </div>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-minimal text-pink-dark mb-6">APPROACH</h4>
                <div className="space-y-6">
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">Research</h5>
                    <p className="text-muted-foreground">Deep understanding of context, culture, and climate</p>
                  </div>
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">Collaboration</h5>
                    <p className="text-muted-foreground">Close partnership with clients, engineers, and craftspeople</p>
                  </div>
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">Innovation</h5>
                    <p className="text-muted-foreground">Sustainable materials and forward-thinking design solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-minimal text-pink-dark mb-2">FOUNDED</h4>
                    <p className="text-xl">2015</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-pink-dark mb-2">PROJECTS</h4>
                    <p className="text-xl">200+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;