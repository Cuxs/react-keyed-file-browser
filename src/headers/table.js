import PropTypes from 'prop-types'
import React from 'react'
import ClassNames from 'classnames'

import { DropTarget } from 'react-dnd'
import { NativeTypes } from 'react-dnd-html5-backend'

import { BaseFileConnectors } from './../base-file.js'

class RawTableHeader extends React.Component {
  static propTypes = {
    select: PropTypes.func,
    fileKey: PropTypes.string,

    connectDropTarget: PropTypes.func,
    isOver: PropTypes.bool,
    isSelected: PropTypes.func,

    browserProps: PropTypes.shape({
      createFiles: PropTypes.func,
      moveFolder: PropTypes.func,
      moveFile: PropTypes.func,
    }),
  }

  handleHeaderClick(event) {
    this.props.select(this.props.fileKey)
  }

  render() {
    const header = (
      <tr
        className={ClassNames('folder', {
          dragover: this.props.isOver,
          selected: this.props.isSelected,
        })}
      >
        <th>Archivo</th>
        <th className="size">Tamaño</th>
        <th className="modified">Modificado</th>
      </tr>
    )

    if (
      typeof this.props.browserProps.createFiles === 'function' ||
      typeof this.props.browserProps.moveFile === 'function' ||
      typeof this.props.browserProps.moveFolder === 'function'
    ) {
      return this.props.connectDropTarget(header)
    } else {
      return header
    }
  }
}

@DropTarget(
  ['file', 'folder', NativeTypes.FILE],
  BaseFileConnectors.targetSource,
  BaseFileConnectors.targetCollect,
)
class TableHeader extends RawTableHeader {}

export default TableHeader
export { RawTableHeader }
