import * as React from 'react';
import { createRoot } from 'react-dom/client';
import WorkingDirectoryExample from './components/WorkingDirectoryExample.jsx';
import DatabaseExample from './components/DatabaseExample.jsx';


const root = createRoot(document.getElementById("root"))
root.render(
    <>
        <DatabaseExample />
        <WorkingDirectoryExample />
    </>
)
