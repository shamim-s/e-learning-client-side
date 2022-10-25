import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-gray-700">
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                1. In higher education a course is a unit of teaching that
                typically lasts one academic term
              </h3>
              <p className="md:pl-0 md:col-span-7">
                In higher education a course is a unit of teaching that
                typically lasts one academic term, is led by one or more
                instructors (teachers or professors), and has a fixed roster of
                students. A course usually covers an individual subject. Courses
                generally have a fixed program of sessions every week during the
                term, called lessons or classes. Students may receive a grade
                and academic credit after completion of the course
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                2. Courses can either be compulsory material or "elective".
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Courses can either be compulsory material or "elective". An
                elective is usually not a required course, but there are a
                certain number of non-specific electives that are required for
                certain majors. The entire collection of courses required to
                complete an academic degree is called a program (or programme)
                of studies.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                3. The term is used in various countries, such as Vietnam
              </h3>
              <p className="md:pl-0 md:col-span-7">
                The term is used in various countries, such as Vietnam, Canada,
                Nigeria, and the United States. In India, the United Kingdom,
                Australia and Singapore, as well as parts of Canada, the word
                "unit" or "module" would be used to refer to an academic course
                as used in North America and the rest of Europe. In the
                Philippines, a course can be an individual subject (usually
                referred to by faculty and school officials) or the entire
                programme (usually referred to by students and outsiders).
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                4. The lecture course, where the instructor gives lectures with
                minimal interaction
              </h3>
              <p className="md:pl-0 md:col-span-7">
                The lecture course, where the instructor gives lectures with
                minimal interaction; the seminar, where students prepare and
                present their original written work for discussion and critique;
                the colloquium or reading course, where the instructor assigns
                readings for each session which are then discussed by the
                members; the tutorial course, where one or a small number of
                students work on a topic and meet with the instructor weekly for
                discussion and guidance. the Directed Individual Study course,
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
