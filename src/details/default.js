import PropTypes from 'prop-types'
import React from 'react'

class Detail extends React.Component {
  static propTypes = {
    file: PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
      url: PropTypes.string,
    }).isRequired,
    close: PropTypes.func,
  }

  handleCloseClick = (event) => {
    if (event) {
      event.preventDefault()
    }
    this.props.close()
  }

  render() {
    let name = this.props.file.key.split('/')
    name = name.length ? name[name.length - 1] : ''

    return (
      <div>
        <h2>Detalles</h2>
        <dl>
          <dt>Ruta</dt>
          <dd>{this.props.file.key}</dd>

          <dt>Nombre de archivo</dt>
          <dd>{name}</dd>
        </dl>
        <a href="#" onClick={this.handleCloseClick}>Cerrar</a>
      </div>
    )
  }
}

export default Detail
