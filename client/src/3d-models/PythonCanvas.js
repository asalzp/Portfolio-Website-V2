import { useState, Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import Python from './Python'

function PythonCanvas() {
    return(
        <div style={{height: '100%', width: '100%'}}>
        <Canvas orthographic camera={{zoom: 20}}>
            {/* <OrthographicCamera makeDefault></OrthographicCamera> */}
            <ambientLight></ambientLight>
            <Suspense fallback={null}>
                <Python />
            </Suspense>
            
        </Canvas>
        </div>
    )
}

export default PythonCanvas