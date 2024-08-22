import './modal.css'
import ReactDOM from 'react-dom'

export default function Modal({ children, isSalesModal }) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal" style={{
        border: "4px solid",
        borderColor: isSalesModal ? 'green' : '#555',
        textAlign: 'center'
      }}>
        {children}
      </div>
    </div>
  ), document.body)
}