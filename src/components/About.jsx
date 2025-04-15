const About = () => {
    return (
      <section className="container mx-auto pt-20 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-8">About Pindad</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="https://pindad.com/uploads/images/content/full/Logo_Pindad1.jpg"
            alt="About Pindad"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="md:w-1/2 md:ml-8">
            <p className="text-lg leading-relaxed">
              PT Pindad is an Indonesian defense and industrial company that specializes in
              military and commercial products, including firearms, vehicles, and heavy
              equipment. Our mission is to support national defense and industrial needs
              with cutting-edge technology and innovation.
            </p>
            <p className="mt-4 text-lg">
              Established in 1983, Pindad continues to contribute to national security
              through high-quality manufacturing and strategic partnerships.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  