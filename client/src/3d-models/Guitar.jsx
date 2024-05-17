/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 python.gltf 
Author: Acvantad (https://sketchfab.com/Acvantad)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/python-programming-language-44d992bf56e244448e9ee5b4da083287
Title: Python Programming language
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { scene } = useGLTF('GuitarLogo.glb')
  const logoRef = useRef()

  useFrame((state, delta) => {
    logoRef.current.rotation.y += delta
  })
  return (
    <primitive ref={logoRef} object={scene}/>
  )
}

useGLTF.preload('GuitarLogo.glb')
