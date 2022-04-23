import React from 'react';
import {SuperButton} from "./common/superbutton/SuperButton";
import {SuperInputText} from "./common/superinput/SuperInputText";
import {SuperCheckbox} from "./common/supercheckbox/SuperCheckbox";
import s from "./TestPage.module.css";

export const TestPage = () => {
    return (
        <>
            <SuperButton>default</SuperButton>
            <SuperInputText className={s.blue} />
            <SuperCheckbox>some text</SuperCheckbox>
        </>
    )
}