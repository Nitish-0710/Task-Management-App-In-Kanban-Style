import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

// Simple touch device detection
const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

// Return the backend directly (don't call as function)
export const getBackend = () => {
  return isTouchDevice() 
    ? TouchBackend 
    : HTML5Backend
}