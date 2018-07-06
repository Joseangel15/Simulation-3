

const initialState = {
    username: '',
    profile: '',
    userId: 0
}

const Default = 'Default';

export default function reducer(state = initialState, action){

switch(action.type) {
    case Default:
        return state;
}

}