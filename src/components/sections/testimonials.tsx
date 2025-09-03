import Image from "next/image";

interface Testimonial {
  name: string;
  loanType: string;
  quote: string;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Madhuri",
    loanType: "Personal Loan",
    quote: "“I loved the customer service you guys provided me. That was very nice and patient with questions I had. I would really like definitely come back here”",
    image: "https://via.placeholder.com/80x80/e5e7eb/4b5563?text=M",
  },
  {
    name: "Neelam",
    loanType: "Education Loan",
    quote: "“I had a good experience with Insight Loan Services. I am thankful to insight for the help you guys gave me. My loan was easy and fast. thank you Insigh”",
    image: "https://via.placeholder.com/80x80/e5e7eb/4b5563?text=N",
  },
  {
    name: "Vishal",
    loanType: "Car Loan",
    quote: "“We came out of their offices very happy with their service. They treated us very kind. Definite will come back. The waiting time was very appropriate.”",
    image: "https://via.placeholder.com/80x80/e5e7eb/4b5563?text=V",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white">
            Some of our Awesome Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Read our awesome testimonials from happy customers who trust and recommend us!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative bg-card text-card-foreground p-8 rounded-lg shadow-lg w-full">
                <p className="text-base leading-relaxed text-left">{testimonial.quote}</p>
                <div className="absolute w-4 h-4 bg-card transform rotate-45 -bottom-2 left-1/2 -translate-x-1/2" />
              </div>
              <div className="flex items-center mt-8 w-full justify-center md:justify-start pl-0 md:pl-[calc(50%-100px)] lg:pl-[calc(50%-120px)] xl:pl-[calc(50%-140px)]">
                <Image
                  src={testimonial.image}
                  alt={`Testimonial from ${testimonial.name}`}
                  width={80}
                  height={80}
                  className="rounded-full flex-shrink-0"
                />
                <div className="ml-4 text-left">
                  <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
                  <p className="text-gray-300">{testimonial.loanType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;