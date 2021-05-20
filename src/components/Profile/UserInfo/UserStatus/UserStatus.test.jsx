import React from 'react';
import {create} from 'react-test-renderer';
import UserStatus from "./UserStatus";
import {test} from "@jest/globals";


describe('UserStatus component', () => {
    test('status in props shod be in state', () => {
        const component = create(<UserStatus status={'test'}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('test');
    });

    test('span is visible', () => {
        const component = create(<UserStatus status={'test'}/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    })

    test('span text is test', () => {
        const component = create(<UserStatus status={'test'}/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('test');
    })

    test('input should be displayed in edit mode instead of span', () => {
        const component = create(<UserStatus status={'test'}/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onClick();
        let input = root.findByType('input');
        expect(input.props.defaultValue).toBe('test');
    })

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<UserStatus status={'test'} updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})
