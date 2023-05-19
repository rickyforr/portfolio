import React from "react";
import { uiText } from "../../../system/uiText";

export default function Logo() {
    return (
        <div className="relative h-12 w-10">
            <span className="absolute h-full w-full flex justify-center items-center text-lg font-Header text-AAsecondary">
                <div className="rounded-full border-AAsecondary border-2 border-solid width[100px] w-10 h-10 flex justify-center items-center">
                    <p>{uiText.logoCharacter}</p>
                </div>
            </span>
        </div>
    );
}
