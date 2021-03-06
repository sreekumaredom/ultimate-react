// import { takeEvery, put, take, call } from 'redux-saga/effects';

// import { IMAGES } from '../constants/index';

// // Here's how it works
// // watcher saga -> actions -> worker saga

// //worker saga
// // function* workerSaga() {
// //      console.log('hey from worker!!');
// //      yield put({ type: 'ACTION_FROM_WORKER' });
// // }

// // function* byebyeSaga() {
// //     console.log('bye bye!');
// // }

// function* handleImagesLoad() {
//     console.log('Fetching images from unsplash');
// }

// //watcher saga
// function* rootSaga() {
//     // // console.log('Hello world!'); test saga is working or not
//     // // yield takeEvery('LOGIN', workerSaga);
//     // yield take('LOGIN');
//     // yield call(workerSaga);
//     // // yield take('ADD_TO_CART');
//     // // yield take('BUY');
//     // yield take('LOGOUT');
//     // yield call(byebyeSaga);
//     //Actual code below
//     yield takeEvery(IMAGES.LOAD, handleImagesLoad);
// }

// export default rootSaga;

import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';

export default function* rootSaga() {
    yield all([imagesSaga(), statsSaga()]);
}
