import { useState, Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import Donut from './Donut'

function DonutCanvas() {
    return(
        <div style={{height: '100%', width: '100%'}}>
        <Canvas orthographic camera={{zoom: 300}}>
            {/* <OrthographicCamera makeDefault></OrthographicCamera> */}
            <ambientLight></ambientLight>
            <Suspense fallback={null}>
                <Donut />
            </Suspense>
            
        </Canvas>
        </div>
    )
}

export default DonutCanvas