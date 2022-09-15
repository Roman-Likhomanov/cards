import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {loginReducer} from './loginReducer';
import {registrationReducer} from './registrationReducer';
import {recoveryPassReducer} from './recoveryPassReducer';
import {setPassReducer} from './setPassReducer';
import {profileReducer} from './profileReducer';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    recoveryPass: recoveryPassReducer,
    setPass: setPassReducer,
    profile: profileReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector