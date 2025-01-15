import React from 'react';

const Team = () => {
  const teamMembers = [
    { name: 'Tanmay Mishra', designation: 'Founder' },
    { name: 'Mukta Pankaj', designation: 'Co-Founder' },
    { name: 'Aman Chauhan', designation: 'Co-Founder' },
    { name: 'Aniket Singh', designation: 'Electronics Lead' },
    { name: 'Sumit Vishwani', designation: 'Mechanical Lead' },
    { name: 'Robin Phillip', designation: 'Electrical Lead' },
    { name: 'James Gray', designation: 'Developer' },
    { name: 'Isha Agrawal', designation: 'Web Lead' },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto px-4 py-6 text-center">
        <div className="w-full max-w-5xl mx-auto">
          <div className="font-bold text-black text-3xl mb-4">
            Our team is united by a shared passion for innovation, working together to create advanced drone solutions
            that positively impact agriculture and defence.
          </div>
          <img src="/images/team/img1.jpeg" alt="Team Image 1" className="mx-auto mb-4 w-100 h-80 object-cover" />
          <p className="text-gray-500 text-sm mb-4 mx-auto max-w-lg">
            Meet the visionaries behind CropSky – a dynamic team united by innovation, driving the future of drone
            technology in agriculture and defence.
          </p>

          <br />
          <br />
          <h2 className="text-center text-2xl font-semibold mb-4">Meet the team</h2>
          <div className="mb-6">
            Our team culture is built on collaboration, innovation, and a shared passion for technology. We encourage
            open communication, value diverse perspectives, and foster an environment where creativity and
            problem-solving thrive, allowing each member to contribute to our mission of advancing drone solutions for
            agriculture and defence.
          </div>
        </div>

        <div
          className="relative w-52 h-64 top-[20%] left-[48%] transform -translate-x-1/2 perspective-[1000px] animate-autoRun"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="absolute inset-0 group transition-transform duration-300"
              style={{
                transform: `rotateY(${index * (360 / 7)}deg) translateZ(500px)`,
              }}
            >
              <div className="relative w-full h-full group-hover:scale-110 transition-all duration-300">
                <img
                  src={`/images/team/img${2 + index}.jpeg`}
                  alt={`Team Image ${2 + index}`}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-300">
                  <div className="text-center">
                    <h3 className="font-bold">{teamMembers[index].name}</h3>
                    <p>{teamMembers[index].designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes autoRun {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(720deg);
          }
        }

        .animate-autoRun {
          animation: autoRun 80s linear infinite;
        }

        .relative:hover .animate-autoRun {
          animation: none;
        }
      `}</style>
    </div>
  );
};

export default Team;
