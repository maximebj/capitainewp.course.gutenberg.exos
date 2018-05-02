const { Component } = wp.element
const { __ } = wp.i18n

const {
	BlockControls,
	BlockAlignmentToolbar,
} = wp.blocks

export default class Toolbar extends Component {

	constructor( props ) {
		super( props )
	}

	render() {

		const { alignment, setAttributes } = this.props

		return (
			<BlockControls>
				<BlockAlignmentToolbar
					value={ alignment }
					onChange={ alignment => setAttributes( { alignment } ) }
				/>
			</BlockControls>
		)
	}
}
