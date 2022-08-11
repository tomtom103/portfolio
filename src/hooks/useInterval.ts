import * as React from 'react'

export const useInterval = (callback: Function, delay: number) => {
    const savedCallback = React.useRef<Function>();

    React.useEffect(() => {
      savedCallback.current = callback
    }, [callback]);

    React.useEffect(() => {
      const handler = (...args: any) => savedCallback.current?.(...args)
  
      if (delay !== null) {
        const id = setInterval(handler, delay)
        return () => clearInterval(id)
      }
    }, [delay]);
};