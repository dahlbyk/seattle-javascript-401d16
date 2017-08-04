import React from 'react'
import {connect} from 'react-redux'

import * as photoActions from '../../action/photo-actions.js'

class PhotoItem extends React.Component {
  render(){
    let {photo} = this.props
    return ( 
      <div key={photo._id}>
        <img src={photo.url} />
        <i onClick={() => this.props.deletePhoto(photo)}
          className='fa fa-trash-o fa-2x' 
          />
      </div>
    )
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = (dispatch) => ({
  deletePhoto: (photo) => dispatch(photoActions.userPhotoDeleteRequest(photo)),
  updatePhoto: (photo) => dispatch(photoActions.usrePhotoUpdateRequest(photo)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotoItem)
