import { useState, Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import Teamwork from './Teamwork'

function TeamworkCanvas() {
    return(
        <div style={{height: '100%', width: '100%'}}>
        <Canvas orthographic camera={{zoom: 15}}>
            {/* <OrthographicCamera makeDefault></OrthographicCamera> */}
            <ambientLight></ambientLight>
            <Suspense fallback={null}>
                <Teamwork />
            </Suspense>
            
        </Canvas>
        </div>
    )
}

export default TeamworkCanvas