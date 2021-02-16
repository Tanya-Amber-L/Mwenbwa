import * as React from "react";
import DisconnectSvg from "../../ressources/images/undraw_through_the_park.svg";
import CloseSvg from "../../ressources/images/cancel.svg";

const Disconnect = () => (
    <div className={"disconnect"}>
        <div className={"disconnect__content"}>
            <p className={"disconnect__content__title"}>{"Disconnect ?"}</p>
            <div className={"disconnect__content__text"}>
                <img
                    className={"disconnect__content__svg"}
                    src={DisconnectSvg}
                    alt={"Trough the park, leaving"}
                    width={"550"}
                />
                <div className={"disconnect__content__text__confirm"}>
                    <p>{"Hey, Nick Banken,"}</p>
                    <p>
                        {"you're sure you want to "}
                        <span className={"bold-txt"}>{"leaf"}</span>
                        {" ?"}
                    </p>
                </div>
            </div>
            <div className={"disconnect__btns"}>
                <button type={"button"} className={"disconnect__btns__button"}>
                    {"Disconnect"}
                </button>
                <button type={"button"} className={"disconnect__btns__button"}>
                    {"Go back"}
                </button>
            </div>

            <img //CLOSE BTN
                className={"close-btn"}
                src={CloseSvg}
                alt={"Close"}
                width={"40"}
            />
        </div>
    </div>
);

export default Disconnect;
