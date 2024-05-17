import { useState, Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import Computer from './Computer'

function ComputerCanvas() {
    return(
        <div style={{height: '100%', width: '100%'}}>
        <Canvas orthographic camera={{zoom: 100}}>
            {/* <OrthographicCamera makeDefault></OrthographicCamera> */}
            <ambientLight></ambientLight>
            <Suspense fallback={null}>
                <Computer />
            </Suspense>
            
        </Canvas>
        </div>
    )
}

export default ComputerCanvas