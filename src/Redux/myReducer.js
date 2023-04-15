

var initialData = {
    counter: 0,
};

const myReducer = (storeData = initialData, action) => {
    if(action.type === 'counter') {
        return {
            count: action.count
        }
    };
    return storeData;
}

export default myReducer;