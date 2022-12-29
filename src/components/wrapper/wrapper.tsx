import './wrapper.css'

interface IWrapperProps {
  children: React.ReactNode
}

export function Wrapper({ children }: IWrapperProps) {
  return <div className='wrapper'>{children}</div>
}
