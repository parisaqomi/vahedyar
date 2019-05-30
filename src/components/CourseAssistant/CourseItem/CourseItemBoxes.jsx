import React, {Fragment} from "react";
import CourseItemBox from './CourseItemBox';

function CourseItemBoxes({items,onDelete}) {
    return (
        <div>
            {
                items.map((item,index) => (
                    <CourseItemBox key={index} item={item} onDelete={onDelete} />
                ))
            }
        </div>
    );
}

export default CourseItemBoxes;

