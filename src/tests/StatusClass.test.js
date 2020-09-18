import React from 'react';
import { create } from 'react-test-renderer';
import StatusClass from '../components/Profile/ProfileInfo/Status/StatusClass';

describe('StatusClass component', () => {
    test("Props status = state status", () => {
        const component = create(<StatusClass status="Some status" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Some status");
    });
    test("after creating input shouldn't be", () => {
        const component = create(<StatusClass status="Some status" />);
        const root = component.root;
        let inputs = root.findAllByType("input");
        expect(inputs.length).toBe(0);
    });
    test("after creating span should be witht my text from props", () => {
        const component = create(<StatusClass status="Some status" />);
        const root = component.root;
        let span = root.findAllByType("span")[1];
        expect(span.children[0]).toBe('Some status');
    });
    test("after click on span input should be displayed", () => {
        const component = create(<StatusClass status="Some status" />);
        const root = component.root;
        let span = root.findAllByType("span")[1];
        span.props.onClick();
        let input = root.findAllByType("input")[0];
        expect(input.props.value).toBe('Some status');
    });
    test("callback should be called after deactivation editMode", () => {
        const mockCallback = jest.fn();
        const component = create(<StatusClass status="Some status" updateStatus = {mockCallback} />);
        const instance = component.getInstance();
        instance.state.status = "Other status";
        instance.hideInput();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});