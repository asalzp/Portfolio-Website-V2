import { useState, Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import Books from './Books'

function BooksCanvas() {
    return(
        <div style={{height: '100%', width: '100%'}}>
        <Canvas orthographic camera={{zoom: 20}}>
            {/* <OrthographicCamera makeDefault></OrthographicCamera> */}
            <ambientLight></ambientLight>
            <Suspense fallback={null}>
                <Books />
            </Suspense>
            
        </Canvas>
        </div>
    )
}

export default BooksCanvas