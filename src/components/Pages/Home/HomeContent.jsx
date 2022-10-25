import React from 'react';
import { HiOutlineSupport, HiOutlineFlag, HiBookOpen} from "react-icons/hi";
import { BiLayer } from "react-icons/bi";

const HomeContent = () => {
    return (
        <div className='grid lg:grid-cols-2 lg:gap-8'>
            <div className='grid lg:grid-cols-2 gap-4 text-center lg:p-0 md:p-0 p-8'>
                <div className='border-2 rounded-lg border-slate-900 p-2 hover:bg-rose-800 hover:text-white transition'>
                    <HiOutlineFlag className='lg:text-6xl md:text-5xl text-5xl mx-auto'/>
                    <h2 className='text-2xl font-medium mb-4'>Expert Teacher</h2>
                    <p>
                        Develop skills for career of various majors including computer
                    </p>
                </div>
                <div className='border-2 rounded-lg border-slate-900 p-2 hover:bg-rose-800 hover:text-white transition'>
                    <BiLayer className='lg:text-6xl md:text-5xl text-5xl mx-auto'/>
                    <h2 className='text-2xl font-medium mb-4'>Self Development</h2>
                    <p>
                        Develop skills for career of Self Development with best Teachers.
                    </p>
                </div>
                <div className='border-2 rounded-lg border-slate-900 p-2 hover:bg-rose-800 hover:text-white transition'>
                    <HiOutlineSupport className='lg:text-6xl md:text-5xl text-5xl mx-auto'/>
                    <h2 className='text-2xl font-medium mb-4'>Immediate Support</h2>
                    <p>
                        Get 7/24 Immediate live support from our team members. To know everything well.
                    </p>
                </div>
                <div className='border-2 rounded-lg border-slate-900 p-2 hover:bg-rose-800 hover:text-white transition'>
                    <HiBookOpen className='lg:text-6xl md:text-5xl text-5xl mx-auto' />
                    <h2 className='text-2xl font-medium mb-4'>Remote Learning</h2>
                    <p>Our Best Theachers will teach you everything form begining to pro.</p>
                </div>
            </div>
            <div className='text-lg lg:p-0 md:p-0 p-8'>
                <p>In higher education a course is a unit of teaching that typically lasts one academic term, is led by one or more instructors (teachers or professors), and has a fixed roster of students. A course usually covers an individual subject. Courses generally have a fixed program of sessions every week during the term, called lessons or classes. Students may receive a grade and academic credit after completion of the course. Courses can either be compulsory material or "elective". An elective is usually not a required course, but there are a certain number of non-specific electives that are required for certain majors. The entire collection of courses required to complete an academic degree is called a program (or programme) of studies.</p>
            </div>
        </div>
    );
};

export default HomeContent;