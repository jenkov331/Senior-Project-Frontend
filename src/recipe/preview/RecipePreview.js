import React from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    Col
} from 'react-bootstrap';
import Prep from '../../images/ico_prep.png';
import Cook from '../../images/ico_cook.png';
import Serve from '../../images/ico_serving.png';
import './RecipePreview.css';

class RecipePreview extends React.Component {
    time(time) {
        let minutes = time % 60;
        let hours = (time - minutes) / 60;

        let timeString = "";

        if (hours === 1) {
            timeString += `${hours} hour `;
        }
        else if (hours > 0) {
            timeString += `${hours} hours `;
        }

        if (minutes === 1) {
            timeString += `${minutes} minute`;
        }
        else if (minutes > 0) {
            timeString += `${minutes} minutes `;
        }

        if (hours === 0 && minutes === 0) {
            timeString += "???";
        }

        return timeString;
    }

    render() {
        return (
            <Row className="recipe-preview">
                <Col sm={3} md={2} xsHidden>
                    <div className="recipe-icon" style={{ "backgroundImage": `url(${this.props.imageSrc})` }} />
                </Col>
                <Col sm={9} md={10}>
                    <div className="recipe-name">
                        {this.props.name}
                    </div>
                    <Row>
                        <Col xs={4} smHidden mdHidden lgHidden>
                            <div className="recipe-icon" style={{ "backgroundImage": `url(${this.props.imageSrc})` }} />
                        </Col>
                        <Col xs={8} sm={12}>
                            <div className="recipe-description">
                                <img src={Prep} alt="" className="icon" /> <strong> Prep Time: </strong>{this.time(this.props.prepTime)}
                            </div>

                            <div className="recipe-description">
                                <img src={Cook} alt="" className="icon" /><strong> Cook Time: </strong>{this.time(this.props.cookTime)}
                            </div>
                            <div className="recipe-description">
                                <img src={Serve} alt="" className="icon" /><strong> Serves: </strong>{this.props.servings}
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
RecipePreview.propTypes = {
    name: PropTypes.string,
    prepTime: PropTypes.number,
    cookTime: PropTypes.number,
    servings: PropTypes.number,
    imageSrc: PropTypes.string
};
export default RecipePreview;
