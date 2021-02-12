import {Input} from './Input'
import {Button} from "../Button/Button";
import React from "react";

export default {
    title: 'Example/Input',
    component: Input
}

const Template = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
    size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
};