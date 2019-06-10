import React from "react";

class CourseItemBox extends React.Component {
    Remove(id) {
        // request with id to delete the course
        console.log(`deleting ${id}`);
        this.props.onDelete();
    }

    render(){
        const { item } = this.props;
        
        return (
            <div className="course-item">
                <div className="course-item-name">{item.name}</div>
                <div className="course-item-vahed">
                    <div>
                        {item.vahedNazari}
                    </div>
                    <div>
                        {item.vahedAmali}
                    </div>
                </div>
                <div className="close-icon" onClick={this.Remove.bind(this,item.id)}>
                    X
                </div>
            </div>
        );
    }
}

export default CourseItemBox;
