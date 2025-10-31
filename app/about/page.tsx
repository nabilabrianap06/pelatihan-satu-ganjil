// File: app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="container mx-auto p-8 pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Me</h1>
      {/* Updated About Me Content */}
      <div className="max-w-3xl mx-auto text-gray-700 space-y-4 text-lg"> {/* Slightly wider text container */}
        <p>
          Hello! I'm Nabil Abrian Aryo Prabowo, currently pursuing a degree in Information Engineering at Universitas Gadjah Mada (UGM), class of 2024.
        </p>
        <p>
          I have a strong interest in technology, particularly in the fields of web development and **Data Science**. My goal is to become a proficient **professional Data Analyst**, leveraging data to drive insights and solutions.
        </p>
        <p>
          Through my studies and personal projects, I am continuously developing my skills in various technologies and analytical techniques. This portfolio showcases some of the work I've done along my learning journey.
        </p>
        {/* You can add more details like specific skills, experiences, or contact info here */}
      </div>
    </div>
  );
}