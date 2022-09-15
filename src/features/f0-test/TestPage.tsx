import React from 'react';
import SuperInputText from '../../main/ui/common/SuperInputText/SuperInputText';
import SuperCheckbox from '../../main/ui/common/SuperCheckbox/SuperCheckbox';
import SuperButton from '../../main/ui/common/SuperButton/SuperButton';


const TestPage = () => {
    return (
        <div>
            <div>
                <SuperInputText/>
            </div>
            <div>
                <SuperCheckbox/>
            </div>
            <div>
                <SuperButton>SuperButton</SuperButton>
            </div>
        </div>
    );
};



export default TestPage;