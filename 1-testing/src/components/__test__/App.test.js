import React from 'react';
import {shallow} from 'enzyme';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

import App from '../App';
let wrapped = null;
beforeEach(() => {
    wrapped = shallow(<App/>);
});

it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length)
        .toEqual(1);
});

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length)
        .toEqual(1);
});