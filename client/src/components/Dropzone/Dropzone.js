import React, {Component, render, ReactDOM} from 'react';
import Dropzone from 'react-dropzone'
import './Dropzone.css';

const handleDropRejected = (...args) => console.log('reject', args)

class ImageUpload extends Component {
  constructor(props) {
    super(props)
    this.state = { 
        preview: null,
        previewName:null
    }
    this.handleDrop = this.handleDrop.bind(this)
  }
  
  handleDrop(preview) {
      console.log(preview)
    this.setState({ 
        preview:preview[0].preview,
        previewName:preview[0].name
     })
  }
  
  render() {
    const { preview } = this.state
    
    return (    
      <section id='dropzone'>
        <Dropzone id = 'box'onDrop={ (files) => {this.handleDrop(files)}} accept="image/jpeg,image/jpg,image/tiff,image/gif, image/png" multiple={ false } onDropRejected={ handleDropRejected }>
          Drag a file here or click to upload.
        </Dropzone>
        <div id = 'preview'>
        {this.state.previewName}
        { preview &&
        <img id='preview' src={ this.state.preview } alt="image preview" />
        }
        </div>
      </section>
    )
  }
}

// render(<ImageUpload />, document.getElementById('main'))

export default ImageUpload;