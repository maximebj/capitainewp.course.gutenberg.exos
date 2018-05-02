const { Component } = wp.element
const { __ } = wp.i18n

const {
	BlockControls,
	InspectorControls,
	ColorPalette,
} = wp.blocks

const {
  PanelBody,
	PanelColor,
	ToggleControl,
	RangeControl,
} = wp.components

export default class Settings extends Component {

	constructor( props ) {
		super( props )
	}

	render() {

		const { target, padding, textSize, textColor, backgroundColor, withRadius, radius, setAttributes } = this.props

		return (
			<InspectorControls>

				<PanelBody>

					<ToggleControl
						label={ __( 'Ouvrir dans un nouvel onglet ?' ) }
						checked={ target }
						onChange={ () => setAttributes( { target: ! target } ) }
					/>

					<RangeControl
						label={ __('Taille du texte') }
						value={ textSize }
						onChange={ textSize => setAttributes( { textSize } ) }
						min={ 12 }
						max={ 40 }
						beforeIcon="editor-textcolor"
						afterIcon="editor-textcolor"
						className="components-base-control__field"
					/>

					<RangeControl
						label={ __('Margine interne') }
						value={ padding }
						onChange={ padding => setAttributes( { padding } ) }
						min={ 0 }
						max={ 40 }
						beforeIcon="editor-contract"
					/>

					<ToggleControl
						label={ __( 'Bordures arrondies' ) }
						checked={ withRadius }
						onChange={ () => setAttributes( { withRadius: ! withRadius } ) }
					/>

					{ withRadius && (
						<RangeControl
							value={ radius }
							onChange={ radius  => setAttributes( { radius } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="marker"
						/>
					)}

				</PanelBody>

				<PanelColor
					title={ __( 'Couleur du texte' ) }
					colorValue={ textColor }
				>
					<ColorPalette
						value={ textColor }
						onChange= { textColor => setAttributes( { textColor } ) }
					/>
				</PanelColor>

				<PanelColor
					title={ __( 'Couleur du fond' ) }
					colorValue={ backgroundColor }
				>
					<ColorPalette
						value={ backgroundColor }
						onChange= { backgroundColor => setAttributes( { backgroundColor } ) }
					/>
				</PanelColor>

			</InspectorControls>
		)
	}
}
