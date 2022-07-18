
import rootReducers from './reducer';
import { createStoreHook } from 'react-redux';

const store = createStoreHook(rootReducers);

export default store;
