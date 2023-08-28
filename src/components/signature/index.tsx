import { useState, useRef } from 'react'
import { Button } from 'antd-mobile'
import SignatureCanvas from 'react-signature-canvas'
import './index.less'

const Index = () => {
  const [signatureDataUrl, setSignatureDataUrl] = useState(null)

  const signatureRef: any = useRef(null)

  const handleClear = () => {
    signatureRef.current?.clear()
    setSignatureDataUrl(null)
  }
  const handleSave = () => {
    const dataURL: any = signatureRef.current?.toDataURL()
    // console.log('dataURL', dataURL)
    setSignatureDataUrl(dataURL)
  }

  return (
    <div className="signature-container">
      <h3>手写签名</h3>
      <div className="btn-wrap">
        <Button
          size="middle"
          style={{ marginRight: '10px' }}
          color="primary"
          onClick={handleSave}
        >
          保存
        </Button>
        <Button size="middle" color="warning" onClick={handleClear}>
          清除
        </Button>
      </div>
      <div className="sign-wrap">
        <SignatureCanvas
          canvasProps={{ className: 'sigCanvas' }}
          penColor="#35d0b6"
          ref={signatureRef}
        />
      </div>
      <div className="pic-wrap">
        <span>显示签名图片</span>
        {signatureDataUrl && <img src={signatureDataUrl} alt="签名" />}
      </div>
    </div>
  )
}

export default Index
