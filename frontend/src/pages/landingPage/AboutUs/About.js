// function About() {
//   return (
//     <div className="bg-[#f8e5d4]">
//       <div className="md:py-44 py-16 max-w-4xl mx-auto px-3 text-center">
//         <h1 className="mx-auto md:text-7xl text-4xl font-bold text-gray-900 pb-4">
//           Welcome to our FindWork
//         </h1>

//         <p className="text-xl font-medium">
//           <p>
//             We take pride in being an efficient platform that bridges the gap
//             between job seekers and businesses seeking talent. With the goal of
//             creating career opportunities and fostering positive employment
//             relationships, we provide a diverse space where candidates can
//             explore and apply for enticing job positions. 🥂{""}
//           </p>
//           <p>
//             We are committed to ensuring a user-friendly experience through an
//             intuitive interface and advanced search functionalities. Leveraging
//             cutting-edge technology, we assist candidates in seizing suitable
//             career opportunities and help businesses find talented workforce
//             resources.
//           </p>
//           <p>
//             Whether you're a job seeker exploring new opportunities or a
//             business expanding your workforce, we aspire to accompany you on the
//             journey to success. Join us in building the future career you dream
//             of, or in finding the talented individuals your business needs!
//           </p>
//           <br />
//           <br />
//         </p>
//       </div>
//     </div>
//   );
// }

// export default About;

//import ud from "assets/ud.jpg";
import sm from "assets/sm.jpg";
import db from "assets/db.jpg";
import am from "assets/am.jpg";
function About() {
  return (
    <div className="bg-[#f8e5d4]">
      <div className="md:py-44 py-16 max-w-4xl mx-auto px-3 text-center">
        <h1 className="mx-auto md:text-7xl text-4xl font-bold text-gray-900 pb-4">
          Welcome to our FindWork
        </h1>

        <p className="text-xl font-medium">
          <p>
            We take pride in being an efficient platform that bridges the gap “
            between job seekers and businesses seeking talent. With the goal of
            creating career opportunities and fostering positive employment
            relationships, we provide a diverse space where candidates can
            explore and apply for enticing job positions. 🥂{""}
          </p>
          <p>
            We are committed to ensuring a user-friendly experience through an
            intuitive interface and advanced search functionalities. Leveraging
            cutting-edge technology, we assist candidates in seizing suitable
            career opportunities and help businesses find talented workforce
            resources.
          </p>
          <p>
            Whether you're a job seeker exploring new opportunities or a
            business expanding your workforce, we aspire to accompany you on the
            journey to success. Join us in building the future career you dream
            of, or in finding the talented individuals your business needs!
          </p>
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-4xl mx-auto px-3 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 pb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQHNC8eEt2no-Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693067922301?e=1748476800&v=beta&t=ukacZGZ5uOrlBrQgxowUSl9zTBV8iOFEAbGu5YEZDDw"
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">Utsav Dey</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <img
              src={sm}
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              Sayantan Mukherjee
            </h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <img
              src={am}
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              Aniruddha Majumder
            </h3>
            <p className="text-gray-600">UX Designer</p>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <img
              src={db}
              alt="Team Member 4"
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              Debayan Bhunia
            </h3>
            <p className="text-gray-600">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
