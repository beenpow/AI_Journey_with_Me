import { useEffect, useState } from 'react'
import Loader from './Loader'

export default function Image({ 
    src, width, height 
}: { src: string, width: number, height: number 
}) {
    const [isLoading, setIsLoading] = useState(true)
    const [message, setMessage] = useState('')
    useEffect(() => {
        init()
    }, [])
    async function init() {
        try {
            await loadImage()
        } catch (error) {
            if (error instanceof Error) {
                setMessage(error.message)
            } else {
                setMessage('Unknown error')
            }
        }
        finally {
            setIsLoading(false)
        }
    }
    function loadImage() {
        new Promise((resolve, reject) => {
            const img = document.createElement('img')
            img.src = src
            img.addEventListener('load', () => {
                resolve(img)
            })
            img.addEventListener('error', () => {
                reject(new Error('Failed to load image'))
            })
        })
    }
    return (
        <div 
            style={{ width, height }}
            className="relative bg-gray-200">  
            
            {isLoading ? (
                <Loader />
            ) : message ?(
                <p>{message}</p>
            ) : (
                <img src={src} alt="" width={width} height={height} />
            )}
        </div>
    )
}