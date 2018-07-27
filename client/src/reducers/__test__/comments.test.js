import commentsReducer from '../comments';
import {SAVE_COMMENT} from "../../actions/types";

it('handles actions of type SAVE__COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New comment'
    };
    const newState = commentsReducer([], action);
    
    expect(newState)
        .toEqual(['New comment']);
});

it('handles action with unknown type', () => {
    const newState = commentsReducer([], { type: 'LKAFDSJLKAFD' });

    expect(newState).toEqual([]);
});
