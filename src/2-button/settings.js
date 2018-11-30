const { __ } = wp.i18n
const { Component } = wp.element

const {
	InspectorControls,
	PanelColorSettings,
} = wp.editor

const {
  PanelBody,
	ToggleControl,
	RangeControl,
} = wp.components

export default class Settings extends Component {

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

				<PanelColorSettings
					title={ __( 'Couleurs' ) }
					colorSettings={ [
						{
							value: textColor,
							onChange: textColor => setAttributes( { textColor } ),
							label: __( 'Couleur du texte' ),
						},
						{
							value: backgroundColor,
							onChange: backgroundColor => setAttributes( { backgroundColor } ),
							label: __( 'Couleur du fond' ),
						},
					] }
				/>
				
			</InspectorControls>
		)
	}
}
