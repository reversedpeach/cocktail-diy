import React from 'react';
//Useful if a component is as it should be, tells that it has changed

import jestRenderer from 'react-test-renderer';
import { Dummy } from './Dummy';

test("The component should render our text if the prop is true", () => {
    const component = jestRenderer.create(
        <Dummy shouldRenderText = {true} text ="Hello world"></Dummy>
    )
const tree = component.toJSON();
console.log(tree);
expect(tree).toMatchSnapshot();

})