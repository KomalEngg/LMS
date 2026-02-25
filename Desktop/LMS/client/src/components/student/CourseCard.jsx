import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";

const CourseCard = ({ course }) => {
  const { calculateRating, currency } = useAppContext();

  const finalPrice = (
    course.coursePrice -
    (course.discount * course.coursePrice) / 100
  ).toFixed(2);

  const rating = Math.floor(calculateRating(course));

  return (
    <Link to={'/course/' + course._id} onclick={()=>scrollTo(0,0,)} className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg">
     
        <img
          src={course.courseThumbnail}
          alt={course.courseTitle}
          className="w-full"
        />
        <div className="p-3 text-left">
         <h3 className="text-sm sm:text-base font-semibold ">

          {course.courseTitle}
        </h3>
        <p className="text-gray-500">GreatStack</p>
       
        <div className="flex items-center space-x-2 "><p>{calculateRating(course)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i< Math.floor (calculateRating(course)) ? assets.star : assets.star_blank}
                className="w-3.5 h-3.5"
                alt=" "
              />
            ))}
          </div>
          <p className="text-gray-500 text-sm">{course.courseRatings.length}</p>
        </div>
        <p className="text-base font-semibold text-gray-800">
          {currency}
          {(course.coursePrice-course.discount*course.coursePrice/100).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
